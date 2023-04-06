print_data([]).
print_data([H|T]) :-
    write(H), write(' '),
    print_data(T).

read_file(File, CPF, Data) :-
    open(File, read, Stream),
    read_line_to_codes(Stream, Line),
    read_lines(Stream, Line, CPF, Data),
    close(Stream).

read_lines(_, end_of_file, _, _) :- !.
read_lines(Stream, Line, CPF, Data) :-
    atom_codes(Atom, Line),
    
    split_string(Atom, "|", "", List),
    nth0(0, List, CPFFromFile),
    (CPFFromFile = CPF ->
        Data = List,
        print_data(Data)
    ;
        read_line_to_codes(Stream, NextLine),
        read_lines(Stream, NextLine, CPF, Data)
    ).
