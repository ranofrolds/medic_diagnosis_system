import { Link } from "react-router-dom";
import "../../styles/style.css";

export const Result = () => {
  return (
    <div>
      <h1>Resultado</h1>
      <p>
        <b>
          O resultado do protótipo é apenas informativo, o paciente deve
          consultar um médico para obter um diagnóstico correto e preciso
        </b>
      </p>
      <Link to="/">
        <button>Voltar ao menu</button>
      </Link>
    </div>
  );
};
