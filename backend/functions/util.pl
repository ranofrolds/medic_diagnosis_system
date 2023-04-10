:- module(meumodulo, [obter_sintomas/1, sintomas_selecionados_por_indice/3, string_para_lista/2, remove_last/2]).

obter_sintomas(Sintomas) :-
    read_file_to_string('../database/help_sintomas.txt', String, []),
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

remove_last([_], []).
remove_last([X|Xs], [X|WithoutLast]) :- remove_last(Xs, WithoutLast).