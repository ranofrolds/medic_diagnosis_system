:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/html_write)).
:- use_module(handlers/processar_diagnostico).
:- use_module(handlers/listar_pacientes).
:- use_module(handlers/listar_sintomas).
:- use_module(handlers/remover_paciente).

:- consult('./database/doencas.pl').

% URL handlers.
:- http_handler('/processar_diagnostico', processar_diagnostico_handler, []).
:- http_handler('/listar_pacientes', listar_pacientes_handler, []).
:- http_handler('/remover_paciente', remover_paciente_handler, []).
:- http_handler('/listar_sintomas', listar_sintomas_handler, []).

server(Port) :-
    http_server(http_dispatch, [port(Port)]),
    format('Server running at http://localhost:~w~n', [Port]).

:- initialization(server(8000)).

