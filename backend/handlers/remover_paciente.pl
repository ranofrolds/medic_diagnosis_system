:- module(remover_paciente, [remover_paciente_handler/1]).
:- use_module(library(http/http_json)).
:- use_module('../functions/removeLine.pl').

% Handler para a URL 
remover_paciente_handler(Request) :-
    http_read_json_dict(Request, JsonIn),
    get_dict(cpf, JsonIn, CPF),
    (   remove_line_with_cpf(CPF, './database/pacientes.txt')
    ->  Resposta = json{status: sucesso}
    ;   Resposta = json{status: erro}
    ),
    reply_json(Resposta).