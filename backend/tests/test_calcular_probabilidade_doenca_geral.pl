:- use_module('../functions/calculoProbabilidades.pl').

:- begin_tests(calcular_probabilidades_gerais).


test(calcula_probabilidades_gerais_1) :-
    calcular_probabilidades_gerais([(enxaqueca, 0.8), (acne, 0.7), (dengue, 0.6)], ProbabilidadesGerais),
    assertion(ProbabilidadesGerais = [(enxaqueca, 0.4), (acne, 0.35), (dengue, 0.25)]).

test(calcula_probabilidades_gerais_2) :-
    calcular_probabilidades_gerais([(asma, 0.5), (anemia, 0.5)], ProbabilidadesGerais),
    assertion(ProbabilidadesGerais = [(asma, 0.5), (anemia, 0.5)]).

:- end_tests(calcular_probabilidades_gerais).