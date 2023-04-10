:- module(listar_pacientes, [listar_pacientes_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/readFileLines.pl').

listar_pacientes_handler(_Request) :-
    read_file('./database/pacientes.txt', Lines),
    read_pacientes(Lines, Pacientes),
    reply_json_dict(json{pacientes: Pacientes}).

remove_last([_], []).
remove_last([X|Xs], [X|WithoutLast]) :- remove_last(Xs, WithoutLast).

read_pacientes([], []).
read_pacientes([Line|Resto], [Paciente|ListaPacientes]) :-
    (   Line \= ""
    ->  split_string(Line, "|", "", [CPF, Nome, Idade,_|SintomasStr]),
        maplist(atom_string, SintomasBool, SintomasStr),
        remove_last(SintomasBool, SintomasBoolFinal),
        Paciente = _{cpf:CPF, nome:Nome, idade:Idade, sintomas:SintomasBoolFinal},
        read_pacientes(Resto, ListaPacientes)
    ;   read_pacientes(Resto, ListaPacientes)
    ).