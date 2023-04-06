:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/html_write)).
:- use_module(handlers/buscar_cpf).
:- use_module(handlers/processar_diagnostico).


% URL handlers.
:- http_handler('/', handle_request, []).
:- http_handler('/buscar_cpf', buscar_cpf_handler, []).
:- http_handler('/processar_diagnostico', processar_diagnostico_handler, [method(post)]).

% Request handlers.
handle_request(_Request) :-
    get_time(X),  % X = seconds elapsed since the epoch.
    reply_html_page(
        [title('Hello')],
        [h1('Hello'), p(X)]
    ).

server(Port) :-
    http_server(http_dispatch, [port(Port)]),
    format('Server running at http://localhost:~w~n', [Port]).

:- initialization(server(8000)).

