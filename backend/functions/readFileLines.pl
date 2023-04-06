:- module(read_file_lines, [read_file/2, read_file_lines/2]).

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


