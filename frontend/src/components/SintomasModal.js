import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const SintomasModal = ({ isOpen, onClose }, props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.doenca}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h4>Sintomas:</h4>
        </ModalBody>
        <ModalFooter justifyContent="start"></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SintomasModal;
