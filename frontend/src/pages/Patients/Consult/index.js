import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useState } from "react";
import JanelaModal from "../../../components/JanelaModal";
import { Link } from "react-router-dom";
import axiosInstance from "../../../components/axiosInstances";

import "../../../styles/style.css";

export const Consult = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [pacientes, setPacientes] = useState([]);

  const listarPacientes = () => {
    const url = "/listar_pacientes";
    axiosInstance
      .get(url)
      .then((resposta) => {
        setPacientes(resposta.data);
        console.log(pacientes);
      })
      .catch((erro) => {
        console.error("Erro GET:", erro.message);
      });
  };

  const handleRemove = (cpf) => {
    console.log("Valor CPF: ", cpf);
    const newArray = data.filter((item) => item.cpf !== cpf);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));

    const url = "/remover_paciente";

    axiosInstance
      .post(url, cpf)
      .then((resposta) => {
        console.log("Resposta do servidor:", resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao enviar objeto:", erro.message);
      });
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxW={700} fontSize="28px">
                  CPF
                </Th>
                <Th maxW={700} fontSize="28px">
                  Nome
                </Th>
                <Th maxW={700} fontSize="28px">
                  Idade
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ cpf, name, age }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td maxW={300}>{cpf}</Td>
                  <Td maxW={300}>{name}</Td>
                  <Td maxW={300}>{age}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ cpf, name, age, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(cpf)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {isOpen && (
          <JanelaModal
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
          />
        )}
        <Button
          colorScheme="orange"
          onClick={() => [setDataEdit({}), onOpen()]}
          id="botao-cadastro"
        >
          NOVO CADASTRO
        </Button>
        <Link to="/">
          <Button id="back-menu">Voltar ao menu principal</Button>
        </Link>
      </div>
    </div>
  );
};
