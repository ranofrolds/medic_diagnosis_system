:- use_module('../functions/analisarSintomas.pl').

:- begin_tests(analisar_sintomas_aux).

% analisar_sintomas_aux([], NaoApresentados, NaoApresentados).

% analisar_sintomas_aux([Sintoma|Resto], TodosSintomas, NaoApresentadosAtualizada) :-
%     (  member(Sintoma, TodosSintomas)
%     -> delete(TodosSintomas, Sintoma, NaoApresentadosRestantes),
%        analisar_sintomas_aux(Resto, NaoApresentadosRestantes, NaoApresentadosAtualizada)
%     ;  analisar_sintomas_aux(Resto, TodosSintomas, NaoApresentadosAtualizada)
%     ).

test(analisar_sintomas_aux_vazio) :-
    analisar_sintomas_aux([], [dor_de_cabeca, febre, dor_no_corpo], [dor_de_cabeca, febre, dor_no_corpo]).

test(analisar_sintomas_aux_1) :-
    analisar_sintomas_aux([dor_de_cabeca], [dor_de_cabeca, febre, dor_no_corpo], [febre, dor_no_corpo]).

test(analisar_sintomas_aux_3, [fail]) :-
    analisar_sintomas_aux([tosse, dor_de_cabeca], [dor_de_cabeca, febre, dor_no_corpo], [tosse, febre, dor_no_corpo]).

:- end_tests(analisar_sintomas_aux).