import { Link } from "react-router-dom";
import "../../styles/style.css";

export const Patients = () => {
  return (
    <div>
      <h1>Listagem Pacientes</h1>
      <Link to="/">
        <p>Voltar ao menu principal</p>
      </Link>
    </div>
  );
};
