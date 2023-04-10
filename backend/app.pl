:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/html_write)).
:- use_module(library(http/http_headers)).
:- use_module(handlers/buscar_cpf).
:- use_module(handlers/processar_diagnostico).
:- use_module(handlers/listar_pacientes).
:- use_module(handlers/listar_sintomas).
:- use_module(handlers/remover_paciente).

:- consult('./database/doencas.pl').

% URL handlers.
% :- http_handler('/buscar_cpf', buscar_cpf_handler, []).
:- http_handler('/processar_diagnostico', processar_diagnostico_handler, []).
:- http_handler('/listar_pacientes', listar_pacientes_handler, []).
:- http_handler('/remover_paciente', remover_paciente_handler, []).
:- http_handler('/listar_sintomas', listar_sintomas_handler, []).

% Manipulador de cabeçalho para permitir o CORS
:- http_handler(root(.), cors_handler, [prefix]).

cors_headers([
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization'
]).

cors_handler(Request) :-
    (   memberchk(origin(Origin), Request) ->
        cors_headers(Headers),
        append(Headers, ['Access-Control-Allow-Origin': Origin], CorsHeaders)
    ;   cors_headers(CorsHeaders)
    ),
    (   http_dispatch(Request) ->
        true
    ;   format('Content-type: text/plain~n~n'),
        format('Not found~n'),
        cors_reply(CorsHeaders)
    ).

cors_reply(Headers) :-
    format('Content-type: text/plain~n'),
    maplist(reply_header, Headers).

reply_header(Key-Value) :-
    format('~w: ~w~n', [Key, Value]).

server(Port) :-
    http_server(http_dispatch, [port(Port)]),
    format('Server running at http://localhost:~w~n', [Port]).

:- initialization(server(8000)).
