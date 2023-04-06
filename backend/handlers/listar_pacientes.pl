:- module(listar_pacientes, [listar_pacientes_handler/1]).
:- use_module(library(http/http_json)).


read_file(File, Lines) :-
    open(File, read, Stream),
    read_file_lines(Stream, Lines),
    close(Stream).

read_file_lines(Stream, []) :-
    at_end_of_stream(Stream).

read_file_lines(Stream, [Line|Lines]) :-
    \+ at_end_of_stream(Stream),
    read_line_to_codes(Stream, Codes),
    atom_codes(Line, Codes),
    read_file_lines(Stream, Lines).

listar_pacientes_handler(_Request) :-
    read_file('./database/pacientes.txt', Lines),
    
    % reply_json_dict(_{array: Lines}).
    format('Content-type: text/plain~n~n'),
    format(Lines).


