import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axiosInstance from "../components/axiosInstances";

const SintomasModal = ({ isOpen, onClose }) => {
  const [sintomas, setSintomas] = useState([]);

  useEffect(() => {
    const url = "/listar_sintomas";
    const mensagem = "nome e sintomas";
    axiosInstance
      .post(url, mensagem)
      .then((resposta) => {
        setSintomas(Object.entries(resposta.data));
        console.log("Resposta retornada: ", resposta);
      })
      .catch((erro) => {
        console.error("Erro ao enviar objeto:", erro.message);
      });
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <h4>Sintomas apresentados:</h4>
          <h4>Sintomas <b>não</b> apresentados:</h4>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{sintomas}</ModalBody>
        <ModalFooter justifyContent="start"></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SintomasModal;
