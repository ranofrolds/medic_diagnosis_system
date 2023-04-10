import { Button } from "@chakra-ui/react";

import "../styles/style.css";

export default function Doenca(props) {
  return (
    <div className="doenca-div">
      <p>
        {props.numero}
        {props.nome}
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        {props.chance}%
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <Button colorScheme="orange" variant="outline" size="xs">
          Ver mais
        </Button>
      </p>
    </div>
  );
}
