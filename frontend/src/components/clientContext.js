import { createContext, useState } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // Sintomas do corpo
  const [bodyValues, setBodyValues] = useState({
    coceira: false,
    dor_na_pele: false,
    dor_no_corpo: false,
    fadiga: false,
    febre: false,
    febre_alta: false,
    inflamacao_na_pele: false,
    palidez: false,
    perda_de_peso: false,
  });
  // Sintomas no peito
  const [chestValues, setChestValues] = useState({
    chiado_no_peito: false,
    falta_de_ar: false,
    tosse_persistente: false,
    tosse_seca: false,
  });
  // Sintomas na cabeça
  const [headValues, setHeadValues] = useState({
    dor_de_cabeca: false,
    nausea: false,
    sensibilidade_a_luz: false,
    tontura: false,
    visao_turva: false,
  });
  // Sintomas em regiões íntimas
  const [intimateValues, setIntimateValues] = useState({
    coceira_anal: false,
    dor_ao_evacuar: false,
    sangramento_ao_evacuar: false,
  });
  //Sintomas no estomago
  const [stomachValues, setStomachValues] = useState({
    azia: false,
    dor_no_estomago: false,
  });

  const values = {
    cpf,
    setCpf,
    name,
    setName,
    age,
    setAge,
    // Sintomas do corpo
    bodyValues,
    setBodyValues,
    // Sintomas no peito
    chestValues,
    setChestValues,
    // Sintomas na cabeça
    headValues,
    setHeadValues,
    // Sintomas em regiões íntimas
    intimateValues,
    setIntimateValues,
    //Sintomas no estomago
    stomachValues,
    setStomachValues,
  };

  return (
    <ClientContext.Provider value={values}>{children}</ClientContext.Provider>
  );
};
