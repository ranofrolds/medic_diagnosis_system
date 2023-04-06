import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Create = () => {
  return (
    <div>
      <h1>Cadastro Paciente</h1>
      <Link to="/head">
        <button>Cadastrar</button>
      </Link>
    </div>
  );
};
