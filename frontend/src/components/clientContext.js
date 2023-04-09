import { createContext, useState } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // Sintomas do corpo
  const [coceira, setCoceira] = useState(false);
  const [dor_na_pele, setDor_na_pele] = useState(false);
  const [dor_no_corpo, setDor_no_corpo] = useState(false);
  const [fadiga, setFadiga] = useState(false);
  const [febre, setFebre] = useState(false);
  const [febre_alta, setFebre_alta] = useState(false);
  const [inflamacao_na_pele, setInflamacao_na_pele] = useState(false);
  const [palidez, setPalidez] = useState(false);
  const [perda_de_peso, setPerda_de_peso] = useState(false);
  // Sintomas no peito
  const [chiado_no_peito, setChiado_no_peito] = useState(false);
  const [falta_de_ar, setFalta_de_ar] = useState(false);
  const [tosse_persistente, setTosse_persistente] = useState(false);
  const [tosse_seca, setTosse_seca] = useState(false);
  // Sintomas na cabeça
  const [dor_de_cabeca, setDor_de_cabeca] = useState(false);
  const [nausea, setNausea] = useState(false);
  const [sensibilidade_a_luz, setSensibilidade_a_luz] = useState(false);
  const [tontura, setTontura] = useState(false);
  const [visao_turva, setVisao_turva] = useState(false);
  // Sintomas em regiões íntimas
  const [coceira_anal, setCoceira_anal] = useState(false);
  const [dor_ao_evacuar, setDor_ao_evacuar] = useState(false);
  const [sangramento_ao_evacuar, setSangramento_ao_evacuar] = useState(false);
  //Sintomas no estomago
  const [azia, setAzia] = useState(false);
  const [dor_no_estomago, setDor_no_estomago] = useState(false);

  const values = {
    cpf,
    setCpf,
    name,
    setName,
    age,
    setAge,
    // Sintomas do corpo
    coceira,
    setCoceira,
    dor_na_pele,
    setDor_na_pele,
    dor_no_corpo,
    setDor_no_corpo,
    fadiga,
    setFadiga,
    febre,
    setFebre,
    febre_alta,
    setFebre_alta,
    inflamacao_na_pele,
    setInflamacao_na_pele,
    palidez,
    setPalidez,
    perda_de_peso,
    setPerda_de_peso,
    // Sintomas no peito
    chiado_no_peito,
    setChiado_no_peito,
    falta_de_ar,
    setFalta_de_ar,
    tosse_persistente,
    setTosse_persistente,
    tosse_seca,
    setTosse_seca,
    // Sintomas na cabeça
    dor_de_cabeca,
    setDor_de_cabeca,
    nausea,
    setNausea,
    sensibilidade_a_luz,
    setSensibilidade_a_luz,
    tontura,
    setTontura,
    visao_turva,
    setVisao_turva,
    // Sintomas em regiões íntimas
    coceira_anal,
    setCoceira_anal,
    dor_ao_evacuar,
    setDor_ao_evacuar,
    sangramento_ao_evacuar,
    setSangramento_ao_evacuar,
    //Sintomas no estomago
    azia,
    setAzia,
    dor_no_estomago,
    setDor_no_estomago,
  };

  return (
    <ClientContext.Provider value={values}>{children}</ClientContext.Provider>
  );
};
