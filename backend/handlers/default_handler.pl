:- http_handler('/api/hello', say_hello, []).

say_hello(Request) :-
    format('Content-type: text/plain~n~n'),
    format('Hello, world!').

