:- module(processar_diagnostico, [processar_diagnostico_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/calculoProbabilidades.pl').

% Receber a string binaria
% Converter para sintomas
% encontrar as intercecções  e calcular as probabilidades
% no caso uma funçao para cada doenca

% Predicado para ler arquivo e obter lista de sintomas
obter_sintomas(Sintomas) :-
    % Abrir arquivo para leitura
    open('./help_sintomas.txt', read, Arquivo),
    % Ler arquivo linha por linha e salvar em lista
    read_lines(Arquivo, ListaSintomas),
    % Fechar arquivo
    close(Arquivo),
    % Remover caracteres especiais das strings e converter para atom
    maplist(remove_chars(['\n', '\r']), ListaSintomas, AtomSintomas),
    % Converter lista de atom para lista de string
    maplist(atom_string, AtomSintomas, Sintomas).

% Predicado para remover caracteres de uma string
remove_chars(Chars, String, NovoString) :-
    atom_chars(String, ListaChars),
    exclude(memberchk(Chars), ListaChars, NovoListaChars),
    atom_chars(NovoString, NovoListaChars).

% Predicado para ler arquivo linha por linha e salvar em lista
read_lines(Stream, Lines) :-
    read_line_to_codes(Stream, Line),
    ( Line = end_of_file -> Lines = []
    ; atom_string(LineAtom, Line), Lines = [LineAtom | RestLines],
      read_lines(Stream, RestLines)
    ).

% Predicado para obter sintomas baseado no array de 0s e 1s
obter_sintomas_por_array(Array, Sintomas) :-
    obter_sintomas(TodosSintomas),
    obter_sintomas_por_array_aux(Array, TodosSintomas, Sintomas).

obter_sintomas_por_array_aux([], _, []).
obter_sintomas_por_array_aux([1 | Resto], [Sintoma | RestoSintomas], [Sintoma | RestoSintomas]) :-
    obter_sintomas_por_array_aux(Resto, RestoSintomas, RestoSintomas).
obter_sintomas_por_array_aux([0 | Resto], [_ | RestoSintomas], Sintomas) :-
    obter_sintomas_por_array_aux(Resto, RestoSintomas, Sintomas).

string_para_lista(String, Lista) :-
    string_codes(String, CodigoChars),
    separador(Sep),
    split_string(CodigoChars, Sep, Sep, CodigoString),
    maplist(atom_number, CodigoString, Lista).

separador('|').

processar_diagnostico_handler(Request) :-
    http_read_json_dict(Request, JsonIn),
    get_dict(sintomas, JsonIn, Sintomas),
    string_para_lista(Sintomas, Array),

    calcular_probabilidade(SintomasString, ProbabilidadesIndividuais, ProbabilidadesGerais),
    probabilidades_para_json(ProbabilidadesIndividuais, JsonOut),
    probabilidades_para_json(ProbabilidadesGerais, JsonOut2),
    merge(JsonOut1, JsonOut2, JsonOutFinal),
    reply_json_dict(JsonOutFinal).

% Converte um array de probabilidades no formato [(doenca1, 0.4), (doenca2, 0.5)] em um dicionário JSON
% no formato {"doenca1": 0.4, "doenca2": 0.5}
probabilidades_para_json(Probabilidades, Json) :-
    maplist(probabilidade_para_dict, Probabilidades, Dicionarios),
    dict_pairs(Json, _, Dicionarios).

% Converte um elemento do array de probabilidades no formato (Doenca, Probabilidade) em um dicionário
% no formato {"nome": Doenca, "probabilidade": Probabilidade}
probabilidade_para_dict((Doenca, Probabilidade), Dict) :-
    Dict = _{nome: Doenca, probabilidade: Probabilidade}.


