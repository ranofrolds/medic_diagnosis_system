import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import axiosInstance from "./axiosInstances";

const JanelaModal = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [name, setName] = useState(dataEdit.name || "");
  const [age, setAge] = useState(dataEdit.age || "");
  const [sintomasSelecionados, setSintomasSelecionados] = useState(
    dataEdit.sintomas || []
  );
  const listaSintomas = [
    "coceira",
    "dor_na_pele",
    "dor_no_corpo",
    "fadiga",
    "febre",
    "febre_alta",
    "inflamacao_na_pele",
    "palidez",
    "perda_de_peso",
    "chiado_no_peito",
    "falta_de_ar",
    "tosse_persistente",
    "tosse_seca",
    "dor_de_cabeca",
    "nausea",
    "sensibilidade_a_luz",
    "tontura",
    "visao_turva",
    "coceira_anal",
    "dor_ao_evacuar",
    "sangramento_ao_evacuar",
    "azia",
    "dor_no_estomago",
  ];

  // Renderiza as checkboxes com os labels

  const handleSintomasChange = (index, value) => {
    const sintomasSelecionadosTemp = sintomasSelecionados.slice();
    sintomasSelecionadosTemp[index] = value;
    setSintomasSelecionados(sintomasSelecionadosTemp);
  };

  const handleSave = () => {
    if (!cpf || !name) return;
  
    const sintomasString = sintomasSelecionados.join("|") + "|";
  
    const obj = {
      cpf: cpf,
      nome: name,
      idade: age,
      sintomas: sintomasString,
    };
  
    console.log(obj);

    axiosInstance
      .post("/atualizar_paciente", obj)
      .then((resposta) => {
        console.log(resposta);
      })
      .catch((erro) => {
        console.error("Erro POST:", erro.message);
      });
  
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Paciente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <FormLabel>CPF</FormLabel>
              <Input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />

              <FormLabel>Nome</FormLabel>
              <Input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <FormLabel>Idade</FormLabel>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <FormLabel>Sintomas</FormLabel>
              {/* Loop para renderizar uma checkbox para cada sintoma */}
              {listaSintomas.map((sintoma, index) => (
                <Checkbox
                  key={index}
                  value={sintoma}
                  isChecked={parseInt(sintomasSelecionados[index]) === 1}
                  onChange={(e) =>
                    handleSintomasChange(index, e.target.checked ? 1 : 0)
                  }
                >
                  {sintoma}
                </Checkbox>
              ))}
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JanelaModal;
