:- module(analisar_sintomas, [analisar_sintomas_aux/3, analisar_sintomas/4]).

analisar_sintomas_aux([], NaoApresentados, NaoApresentados).

analisar_sintomas_aux([Sintoma|Resto], TodosSintomas, NaoApresentadosAtualizada) :-
    (  member(Sintoma, TodosSintomas)
    -> delete(TodosSintomas, Sintoma, NaoApresentadosRestantes),
       analisar_sintomas_aux(Resto, NaoApresentadosRestantes, NaoApresentadosAtualizada)
    ;  analisar_sintomas_aux(Resto, TodosSintomas, NaoApresentadosAtualizada)
    ).

analisar_sintomas(NaoApresentados, Sintomas, NomeDoenca, SintomasIntersecao) :-
    findall(S, sintoma(NomeDoenca, S), TodosSintomas),
    analisar_sintomas_aux(Sintomas, TodosSintomas,NaoApresentados),
    intersection(Sintomas,TodosSintomas,SintomasIntersecao).
    