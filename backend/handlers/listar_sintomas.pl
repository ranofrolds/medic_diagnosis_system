:- module(listar_sintomas, [listar_sintomas_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/util.pl').

analisar_sintomas_aux([], NaoApresentados, NaoApresentados).

analisar_sintomas_aux([Sintoma|Resto], TodosSintomas, NaoApresentadosAtualizada) :-
    (  member(Sintoma, TodosSintomas)
    -> delete(TodosSintomas, Sintoma, NaoApresentadosRestantes),
       analisar_sintomas_aux(Resto, NaoApresentadosRestantes, NaoApresentadosAtualizada)
    ;  analisar_sintomas_aux(Resto, TodosSintomas, NaoApresentadosAtualizada)
    ).

analisar_sintomas(NaoApresentados, Sintomas, NomeDoenca) :-
    findall(S, sintoma(NomeDoenca, S), TodosSintomas),
    analisar_sintomas_aux(Sintomas, TodosSintomas,NaoApresentados).

listar_sintomas_handler(Request) :-
    http_read_json_dict(Request, JsonIn),
    get_dict(doenca, JsonIn, DoencaStr),
    get_dict(sintomas, JsonIn, SintomasBin),
    string_to_atom(DoencaStr, DoencaAtom),
    string_para_lista(SintomasBin, Array),
    obter_sintomas(TodosSintomas),
    sintomas_selecionados_por_indice(Array, Sintomas, TodosSintomas),
    maplist(atom_string, SintomasAtomo, Sintomas),
    analisar_sintomas(NaoApresentados, SintomasAtomo,DoencaAtom),
    sintomas_apresentados_json(SintomasAtomo, SintomasApresentadosJson),
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

