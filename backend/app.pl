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

% Cabeçalhos CORS
cors_headers([
    access_control_allow_origin('*'),
    access_control_allow_methods([get, post, options]),
    access_control_allow_headers([
        'content-type', 'accept', 'authorization'
    ])
]).

% Manipulador de cabeçalho para permitir o CORS
cors_handler(Request) :-
    cors_headers(Headers),
    (   memberchk(origin(Origin), Request) ->
        Headers = [access_control_allow_origin(Origin) | Headers]
    ;   true
    ),
    (   http_dispatch(Request) ->
        true
    ;   cors_headers(CorsHeaders),
        cors_reply(CorsHeaders)
    ).

% Responder a uma solicitação CORS
cors_reply(Headers) :-
    format('Content-type: text/plain~n'),
    reply_header(status(204)),
    maplist(reply_header, Headers).

server(Port) :-
    http_server(http_dispatch, [port(Port)]),
    format('Server running at http://localhost:~w~n', [Port]).

:- initialization(server(8000)).