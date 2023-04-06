import { Link } from "react-router-dom";
import "../../styles/style.css";

export const Landing = () => {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <Link to="/head">
        <button>Fazer consulta</button>
      </Link>
      <Link to="/consult">
        <p>Consultar Pacientes</p>
      </Link>
    </div>
  );
};
