import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../styles/style.css";

export const Landing = () => {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <Link to="/create">
        <Button>Fazer consulta</Button>
      </Link>
      <Link to="/consult">
        <p>Consultar Pacientes</p>
      </Link>
    </div>
  );
};
