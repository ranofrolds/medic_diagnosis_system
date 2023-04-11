import { Button } from "@chakra-ui/react";
import SintomasModal from "../components/SintomasModal";
import { useDisclosure } from "@chakra-ui/react";

import "../styles/style.css";

export default function Doenca(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="doenca-div">
      <p>
        {props.numero}
        {props.nome}
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        {props.chance}%<span>&nbsp;</span>
        <span>&nbsp;</span>
        <Button
          colorScheme="orange"
          variant="outline"
          size="xs"
          onClick={() => [onOpen()]}
        >
          Ver mais
        </Button>
        {isOpen && (
          <SintomasModal
            isOpen={isOpen}
            onClose={onClose}
            nome={props.nome}
            sintomas={props.sintomas}
          />
        )}
      </p>
    </div>
  );
}
