import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Create = () => {
  return (
    <div>
      <h1>Cadastro Paciente</h1>
      <Link to="/">
        <p>Voltar ao menu principal</p>
      </Link>
    </div>
  );
};
