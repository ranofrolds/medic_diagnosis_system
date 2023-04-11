:- module(atualizar_paciente, [atualizar_paciente_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/util.pl').
:- use_module('../functions/removeLine.pl').
:- use_module(library(readutil)).


salvar_paciente(Paciente) :-
    get_dict(cpf, Paciente, Cpf),
    get_dict(nome, Paciente, Nome),
    get_dict(idade, Paciente, Idade),
    get_dict(sintomas, Paciente, SintomasBin),
    string_para_lista(SintomasBin, Sintomas),
    atomic_list_concat(Sintomas, '|', SintomasStr),
    format(atom(PacienteStr), '~w|~w|~w|#|~w|', [Cpf, Nome, Idade, SintomasStr]),
    open('./database/pacientes.txt', append, Stream),
    write(Stream, PacienteStr),
    nl(Stream), % adiciona uma nova linha
    close(Stream).

atualizar_paciente_handler(Request) :-
    http_read_json_dict(Request, JsonIn),
    get_dict(cpf, JsonIn, CPF),
    (   remove_line_with_cpf(CPF, './database/pacientes.txt')
    ->  Resposta = json{status: sucesso}
    ;   Resposta = json{status: erro}
    ),
    salvar_paciente(JsonIn).
