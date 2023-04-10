:- module(processar_diagnostico, [processar_diagnostico_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/calculoProbabilidades.pl').
:- use_module('../functions/util.pl').

:- use_module(library(readutil)).


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
    sort(0, @>=, ProbabilidadesIndividuais, ProbIndividuaisOrdenadas),
    sort(0, @>=, ProbabilidadesGerais, ProbGeraisOrdenadas),
    probabilidades_para_json(ProbIndividuaisOrdenadas, JsonOut1),
    probabilidades_para_json(ProbGeraisOrdenadas, JsonOut2),
    salvar_paciente(JsonIn),
    reply_json_dict(_{probabilidadesIndividuais: JsonOut1, probabilidadesGerais: JsonOut2}).


probabilidade_para_par((Doenca, Probabilidade), Doenca-Probabilidade).

probabilidades_para_json(Probabilidades, Json) :-
    maplist(probabilidade_para_par, Probabilidades, Pares),
    dict_pairs(Json, _, Pares).