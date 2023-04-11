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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const JanelaModal = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [name, setName] = useState(dataEdit.name || "");
  const [age, setAge] = useState(dataEdit.age || "");
  const [sintomasSelecionados, setSintomasSelecionados] = useState([]);

  const [listaDoencas, setListaDoencas] = useState([]);

  useEffect(() => {
    fetch("../../../backend/database/help_sintomas.txt")
      .then((response) => response.text())
      .then((data) => setListaDoencas(data.split("\n")));
  }, []);
  // Renderiza as checkboxes com os labels

  const handleSintomasChange = (e) => {
    const sintomaSelecionado = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSintomasSelecionados([...sintomasSelecionados, sintomaSelecionado]);
    } else {
      setSintomasSelecionados(
        sintomasSelecionados.filter((sintoma) => sintoma !== sintomaSelecionado)
      );
    }
  };

  const handleSave = () => {
    if (!cpf || !name) return;

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { cpf, name };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { cpf, name }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

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
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`sintoma-${index}`}
                    checked={dataEdit.sintomas[index] === 1}
                    onChange={handleSintomasChange}
                  />
                  <label htmlFor={`sintoma-${index}`}>
                    {listaDoencas[index]} - {sintoma}
                  </label>
                </div>
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
