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
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import axiosInstance from "./axiosInstances";

const JanelaModal = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [name, setName] = useState(dataEdit.name || "");
  const [age, setAge] = useState(dataEdit.age || "");

  const handleSave = () => {
    if (!cpf || !name) return;

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { cpf, name };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { cpf, name }]
      : [...(data ? data : [])];

    const obj = {
      cpf:"",
      nome: "",
      idade: 0,
      sintomas: ""
    };
    
    axiosInstance.post('/atualizar_paciente', obj)
    .then((resposta) => {
      console.log(resposta);
    })
    .catch((erro) => {
      console.error("Erro GET:", erro.message);
    });

    setData(newDataArray);


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
              <Box>
                <FormLabel>CPF</FormLabel>
                <Input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Idade</FormLabel>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Box>
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
