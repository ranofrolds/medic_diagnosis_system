:- module(listar_sintomas, [listar_sintomas_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/util.pl').
:- use_module('../functions/analisarSintomas.pl').


listar_sintomas_handler(Request) :-
    http_read_json_dict(Request, JsonIn),
    get_dict(doenca, JsonIn, DoencaStr),
    get_dict(sintomas, JsonIn, SintomasBin),
    string_to_atom(DoencaStr, DoencaAtom),
    string_para_lista(SintomasBin, Array),
    obter_sintomas(TodosSintomas),
    sintomas_selecionados_por_indice(Array, Sintomas, TodosSintomas),
    maplist(atom_string, SintomasAtomo, Sintomas),
    analisar_sintomas(NaoApresentados, SintomasAtomo,DoencaAtom,SintomasIntersecao),
    sintomas_apresentados_json(SintomasIntersecao, SintomasApresentadosJson),
    sintomas_nao_apresentados_json(NaoApresentados, SintomasNaoApresentadosJson),
    dict_create(JsonOut, _, 
        [sintomasApresentados=SintomasApresentadosJson,
         sintomasNaoApresentados=SintomasNaoApresentadosJson]),
    reply_json_dict(JsonOut).
    
sintomas_apresentados_json(Sintomas, SintomasJson) :-
    maplist(atom_string, SintomasAtom, Sintomas),
    dict_create(SintomasJson, _, [sintomas=SintomasAtom]).
    
sintomas_nao_apresentados_json(Sintomas, SintomasJson) :-
    maplist(atom_string, SintomasAtom, Sintomas),
    dict_create(SintomasJson, _, [sintomas=SintomasAtom]).

