:- module(processar_diagnostico, [processar_diagnostico_handler/1]).
:- use_module(library(http/http_client)).


processar_diagnostico_handler(Request) :-
    member(method(post), Request), !,
    http_read_data(Request, Data, []),
    processar_diagnostico(Data, RequestList),
    atomic_list_concat(RequestList, '|', RequestString),
    format('Content-type: text/plain~n~n'),
    format(RequestString).

processar_diagnostico(RequestString, RequestList) :-
    atomic_list_concat(RequestList, '|', RequestString),
    maplist(atom_string, Array, RequestList).