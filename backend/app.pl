:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_cors)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_parameters)).
:- use_module(library(http/http_error)).
:- use_module(handlers/buscar_cpf).
:- use_module(handlers/processar_diagnostico).
:- use_module(handlers/listar_pacientes).
:- use_module(handlers/listar_sintomas).
:- use_module(handlers/remover_paciente).

:- consult('./database/doencas.pl').

% Define a política de CORS
:- set_setting_default(http:cors, [*]).

% URL handlers.
% :- http_handler('/buscar_cpf', buscar_cpf_handler, []).
:- http_handler('/processar_diagnostico', processar_diagnostico_handler, []).
:- http_handler('/listar_pacientes', listar_pacientes_handler, []).
:- http_handler('/remover_paciente', remover_paciente_handler, []).
:- http_handler('/listar_sintomas', listar_sintomas_handler, []).

listar_pacientes_handler(_Request) :-
    read_file('./database/pacientes.txt', Lines),
    read_pacientes(Lines, Pacientes),
    cors_enable(_, [methods([get]), headers([content-type])],
                reply_json_dict(json{pacientes: Pacientes})).

server(Port) :-
    http_server(http_dispatch, [port(Port)]),
    format('Server running at http://localhost:~w~n', [Port]).

:- initialization(server(8000)).
