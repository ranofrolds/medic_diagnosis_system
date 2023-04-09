:- module(processar_diagnostico, [processar_diagnostico_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/calculoProbabilidades.pl').

:- use_module(library(readutil)).
% Receber a string binaria
% Converter para sintomas
% encontrar as intercecções  e calcular as probabilidades
% no caso uma funçao para cada doenca

% Predicado para obter lista de sintomas a partir de um arquivo
obter_sintomas(Sintomas) :-
    read_file_to_string('./help_sintomas.txt', String, []),
    split_string(String, "\n", "\r", Sintomas).

sintomas_selecionados_por_indice(Array, Sintomas,TodosSintomas) :-
    sintomas_por_indice(Array, 0, Sintomas,TodosSintomas).

sintomas_por_indice([], _, [],TodosSintomas).
sintomas_por_indice([0|T], Index, SintomasSelecionados,TodosSintomas) :-
    NewIndex is Index + 1,
    sintomas_por_indice(T, NewIndex, SintomasSelecionados,TodosSintomas).
sintomas_por_indice([1|T], Index, [Sintoma|SintomasSelecionados],TodosSintomas) :-
    nth0(Index,TodosSintomas, Sintoma),
    NewIndex is Index + 1,
    sintomas_por_indice(T, NewIndex, SintomasSelecionados,TodosSintomas).

string_para_lista(String, Lista) :-
    string_codes(String, CodigoChars),
    separador(Sep),
    split_string(CodigoChars, Sep, Sep, CodigoString),
    maplist(atom_number, CodigoString, Lista).


separador('|').

salvar_paciente(Paciente) :-
    get_dict(cpf, Paciente, Cpf),
    get_dict(nome, Paciente, Nome),
    get_dict(idade, Paciente, Idade),
    get_dict(sintomas, Paciente, SintomasBin),
    string_para_lista(SintomasBin, Sintomas),
    atomic_list_concat(Sintomas, '|', SintomasStr),
    format(atom(PacienteStr), '~w|~w|~w|#|~w|', [Cpf, Nome, Idade, SintomasStr]),
    open('./database/pacientes.txt', append, Stream),
    write(Stream, PacienteStr),
    nl(Stream), % adiciona uma nova linha
    close(Stream).

processar_diagnostico_handler(Request) :-
    http_read_json_dict(Request, JsonIn),
    get_dict(sintomas, JsonIn, SintomasBin),
    string_para_lista(SintomasBin, Array),
    obter_sintomas(TodosSintomas),
    sintomas_selecionados_por_indice(Array, Sintomas, TodosSintomas),
    maplist(atom_string, SintomasAtomo, Sintomas),
    calcular_probabilidade(SintomasAtomo, ProbabilidadesIndividuais, ProbabilidadesGerais),
    probabilidades_para_json(ProbabilidadesIndividuais, JsonOut1),
    probabilidades_para_json(ProbabilidadesGerais, JsonOut2),
    salvar_paciente(JsonIn),
    reply_json_dict(_{probabilidadesIndividuais: JsonOut1, probabilidadesGerais: JsonOut2}).


probabilidade_para_par((Doenca, Probabilidade), Doenca-Probabilidade).

probabilidades_para_json(Probabilidades, Json) :-
    maplist(probabilidade_para_par, Probabilidades, Pares),
    dict_pairs(Json, _, Pares).