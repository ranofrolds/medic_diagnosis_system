:- use_module('../functions/calculoProbabilidades.pl').

:- begin_tests(calcula_probabilidade_doenca).

% calcular_probabilidade_doenca(Sintomas, NomeDoenca, Probabilidade) :-
%     doenca(NomeDoenca,ProbEndemica),
%     findall(S, sintoma(NomeDoenca, S), ListaSintomas),
%     intersection(Sintomas, ListaSintomas, IntersecaoDoenca),
%     length(IntersecaoDoenca, QtdSintomas),
%     (   length(IntersecaoDoenca, QtdSintomas)
%     ->  Probabilidade is QtdSintomas * 0.33 * ProbEndemica
%     ;   Probabilidade = 0
%     ).

test(probabilidade_enxaqueca) :-
    calcular_probabilidade_doenca([dor_de_cabeca, sensibilidade_a_luz], enxaqueca, Probabilidade),
    assertion(Probabilidade == 0.88).

test(probabilidade_acne) :-
    calcular_probabilidade_doenca([cravos_e_espinhas, inflamacao_na_pele], acne, Probabilidade),
    assertion(Probabilidade == 0.462).

:- end_tests(calcula_probabilidade_doenca).