import { useContext } from "react";
import { ClientContext } from "./clientContext";

export default function FinalizarConsulta() {
  // Importa as variáveis do estado do ClientContext
  const {
    cpf,
    name,
    age,
    coceira,
    dor_na_pele,
    dor_no_corpo,
    fadiga,
    febre,
    febre_alta,
    inflamacao_na_pele,
    palidez,
    perda_de_peso,
    chiado_no_peito,
    falta_de_ar,
    tosse_persistente,
    tosse_seca,
    dor_de_cabeca,
    nausea,
    sensibilidade_a_luz,
    tontura,
    visao_turva,
    coceira_anal,
    dor_ao_evacuar,
    sangramento_ao_evacuar,
    azia,
    dor_no_estomago,
  } = useContext(ClientContext);

  // Cria um objeto JSON com as variáveis do estado
  const data = {
    cpf,
    name,
    age,
    coceira,
    dor_na_pele,
    dor_no_corpo,
    fadiga,
    febre,
    febre_alta,
    inflamacao_na_pele,
    palidez,
    perda_de_peso,
    chiado_no_peito,
    falta_de_ar,
    tosse_persistente,
    tosse_seca,
    dor_de_cabeca,
    nausea,
    sensibilidade_a_luz,
    tontura,
    visao_turva,
    coceira_anal,
    dor_ao_evacuar,
    sangramento_ao_evacuar,
    azia,
    dor_no_estomago,
  };

  // Transforma o objeto JSON em uma string JSON
  const json = JSON.stringify(data);

  // Baixa o arquivo JSON
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(json)
  );
  element.setAttribute("download", "consulta.json");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
