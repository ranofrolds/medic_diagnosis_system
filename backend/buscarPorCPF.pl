print_data([]).
print_data([H|T]) :-
    write(H), write(' '),
    print_data(T).

read_file(File, CPF, Data) :-
    open(File, read, Stream),
    read_line_to_codes(Stream, Line),
    search_by_CPF(Stream, Line, CPF, Data),
    close(Stream).

    search_by_CPF(_, end_of_file, _, _) :- !.
search_by_CPF(Stream, Line, CPF, Data) :-
    atom_codes(Atom, Line),
    
    split_string(Atom, "|", "", List),
    nth0(0, List, CPFFromFile),
    (CPFFromFile = CPF ->
        Data = List,
        print_data(Data)
    ;
        read_line_to_codes(Stream, NextLine),
        search_by_CPF(Stream, NextLine, CPF, Data)
    ).
