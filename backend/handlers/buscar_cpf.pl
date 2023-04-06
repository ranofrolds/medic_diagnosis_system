:- module(buscar_cpf, [buscar_cpf_handler/1]).

buscar_cpf_handler(_Request) :-
    format('Content-type: text/plain~n~n'),
    format('CPF!').
