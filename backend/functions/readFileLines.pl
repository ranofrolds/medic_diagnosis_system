:- module(read_file_lines, [read_file/2, read_file_lines/2, read_pacientes/2]).
:- use_module('../functions/util.pl').

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


read_pacientes([], []).
read_pacientes([Line|Resto], [Paciente|ListaPacientes]) :-
    (   Line \= ""
    ->  split_string(Line, "|", "", [CPF, Nome, Idade,_|SintomasStr]),
        maplist(atom_string, SintomasBool, SintomasStr),
        remove_last(SintomasBool, SintomasBoolFinal),
        Paciente = _{cpf:CPF, nome:Nome, idade:Idade, sintomas:SintomasBoolFinal},
        read_pacientes(Resto, ListaPacientes)
    ;   read_pacientes(Resto, ListaPacientes)
    ).