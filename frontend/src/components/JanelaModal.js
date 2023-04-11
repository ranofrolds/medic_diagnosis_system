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
import { useState, useEffect } from "react";
import axiosInstance from "./axiosInstances";

const JanelaModal = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [name, setName] = useState(dataEdit.name || "");
  const [age, setAge] = useState(dataEdit.age || "");
  const [sintomasSelecionados, setSintomasSelecionados] = useState([]);

  const [listaSintomas, setListaSintomas] = useState([]);

  useEffect(() => {
    fetch("../../../backend/database/help_sintomas.txt")
      .then((response) => response.text())
      .then((data) => setListaSintomas(data.split("\n")));
  }, []);
  // Renderiza as checkboxes com os labels

  const handleSintomasChange = (e) => {
    const sintomasSelecionadosTemp = [...sintomasSelecionados];
    const sintomaIndex = parseInt(e.target.id.split("-")[1]);
    sintomasSelecionadosTemp[sintomaIndex] = e.target.checked ? 1 : 0;
    setSintomasSelecionados(sintomasSelecionadosTemp);
  };

  const handleSave = () => {
    if (!cpf || !name) return;

    const obj = {
      cpf: cpf,
      nome: name,
      idade: age,
      sintomas: sintomasSelecionados.join("|") + "|",
    };

    axiosInstance
      .post("/atualizar_paciente", obj)
      .then((resposta) => {
        console.log(resposta);
      })
      .catch((erro) => {
        console.error("Erro GET:", erro.message);
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
              {dataEdit.sintomas.map((sintoma, index) => (
                <Checkbox
                  key={index}
                  value={sintoma}
                  isChecked={sintomasSelecionados.includes(sintoma)}
                  onChange={handleSintomasChange}
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
