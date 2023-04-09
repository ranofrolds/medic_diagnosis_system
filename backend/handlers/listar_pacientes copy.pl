:- module(listar_pacientes, [listar_pacientes_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/readFileLines.pl').

listar_pacientes_handler(_Request) :-
    read_file('./database/pacientes.txt', Lines),
    
    % reply_json_dict(_{array: Lines}).
    format('Content-type: text/plain~n~n'),
    format(Lines).


