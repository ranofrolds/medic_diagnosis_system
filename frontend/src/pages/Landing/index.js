import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../styles/style.css";

export const Landing = () => {
  return (
    <div className="main-div">
      <div className="box-div">
        <h1 id="bem-vindo">Bem-vindo</h1>
        <Link to="/create">
          <Button className="btn-large">Fazer consulta</Button>
        </Link>
        <Link to="/consult">
          <p id="consult">Consultar Pacientes</p>
        </Link>
      </div>
    </div>
  );
};
