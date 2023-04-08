:- module(probabilidade, [calcular_probabilidades_gerais/2, 
    calcular_probabilidades_gerais_aux/3, 
    calcular_probabilidades_individuais/2, calcular_probabilidade_doenca/3, calcular_probabilidade/3, extract_probabilidade/2]).

calcular_probabilidades_gerais(ProbabilidadesIndividuais, ProbabilidadesGerais) :-
    maplist(extract_probabilidade, ProbabilidadesIndividuais, Probabilidades),
    sumlist(Probabilidades, SomaIndividuais),
    calcular_probabilidades_gerais_aux(ProbabilidadesIndividuais, SomaIndividuais, ProbabilidadesGerais).

extract_probabilidade((_, Probabilidade), Probabilidade).

calcular_probabilidades_gerais_aux([], _, []).
calcular_probabilidades_gerais_aux([(Doenca, Probabilidade) | T], SomaIndividuais, [(Doenca, ProbabilidadeGeral) | T1]) :-
    ProbabilidadeGeral is Probabilidade / SomaIndividuais,
    calcular_probabilidades_gerais_aux(T, SomaIndividuais, T1).

calcular_probabilidades_individuais(Sintomas, ProbabilidadesIndividuais) :-
    findall((NomeDoenca, Probabilidade), calcular_probabilidade_doenca(Sintomas, NomeDoenca, Probabilidade), ProbabilidadesIndividuais).


calcular_probabilidade_doenca(Sintomas, NomeDoenca, Probabilidade) :-
    doenca(NomeDoenca,ProbEndemica),
    findall(S, sintoma(NomeDoenca, S), ListaSintomas),
    intersection(Sintomas, ListaSintomas, IntersecaoDoenca),
    length(IntersecaoDoenca, QtdSintomas),
    Probabilidade is QtdSintomas * 0.33 * ProbEndemica.

calcular_probabilidade(Sintomas, ProbabilidadesIndividuais, ProbabilidadesGerais) :-
    calcular_probabilidades_individuais(Sintomas, ProbabilidadesIndividuais),
    calcular_probabilidades_gerais(ProbabilidadesIndividuais, ProbabilidadesGerais).

