:- module(remove_line, [remove_line_with_cpf/2, delete_line_with_cpf/3, write_updated_lines/2]).
:- use_module(readFileLines).

remove_line_with_cpf(CPF, Filename) :-
    read_file(Filename, Lines),
    delete_line_with_cpf(Lines, CPF, UpdatedLines),
    open(Filename, write, Stream),
    write_updated_lines(Stream, UpdatedLines),
    close(Stream).

delete_line_with_cpf([], _, []).
delete_line_with_cpf([Line|Lines], CPF, UpdatedLines) :-
    split_string(Line, "|", "", [CPFFromFile|_]),
    (CPFFromFile = CPF ->
        delete_line_with_cpf(Lines, CPF, UpdatedLines)
    ;
        UpdatedLines = [Line|Rest],
        delete_line_with_cpf(Lines, CPF, Rest)
    ).

write_updated_lines(_, []).
write_updated_lines(Stream, [Line|Lines]) :-
    write(Stream, Line), nl(Stream),
    write_updated_lines(Stream, Lines).
