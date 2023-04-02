:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_parameters)).
:- use_module(library(plweb)).
:- use_module(library(http/http_log)).
:- use_module(library(http/thread_httpd)).
:- use_module(config).
:- use_module(handlers/user_handler).
:- use_module(handlers/post_handler).
% Definir rotas da API
% :- http_handler(root(api/user), user_handler, []).
% :- http_handler(root(api/post), post_handler, []).

% Iniciar servidor HTTP
:- initialization start_server.

port(8000).

start_server :-
    port(Port),
    http_server(http_dispatch, [port(Port)]).
