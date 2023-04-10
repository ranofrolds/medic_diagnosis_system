:- module(listar_pacientes, [listar_pacientes_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/readFileLines.pl').
:- use_module('../functions/util.pl').
:- use_module(library(http/http_cors)).

listar_pacientes_handler(_Request) :-
    read_file('./database/pacientes.txt', Lines),
    read_pacientes(Lines, Pacientes),
    reply_json_dict(json{pacientes: Pacientes}).



