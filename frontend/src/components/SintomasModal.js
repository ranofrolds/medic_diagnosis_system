import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../components/axiosInstances";

const SintomasModal = ({ isOpen, onClose, nome, sintomas }) => {
  const [sintomasApresentados, setSintomasApresentados] = useState([]);
  const [sintomasNaoApresentados, setSintomasNaoApresentados] = useState([]);

  useEffect(() => {
    const url = "/listar_sintomas";
    const mensagem = { doenca: nome, sintomas: sintomas };
    axiosInstance
      .post(url, mensagem)
      .then((resposta) => {
        console.log("Resposta retornada: ", resposta.data);
        setSintomasApresentados(resposta.data.sintomasApresentados.sintomas);
        setSintomasNaoApresentados(
          resposta.data.sintomasNaoApresentados.sintomas
        );
      })
      .catch((erro) => {
        console.error("Erro ao enviar objeto:", erro.message);
      });
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sintomas</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h4>Sintomas apresentados:</h4>
          {sintomasApresentados.map((sintoma) => (
            <div key={sintoma}>{sintoma}</div>
          ))}
          <br />
          <h4>
            Sintomas <b>não</b> apresentados:
          </h4>
          {sintomasNaoApresentados.map((sintoma) => (
            <div key={sintoma}>{sintoma}</div>
          ))}
        </ModalBody>
        <ModalFooter justifyContent="start"></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SintomasModal;
