import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../styles/style.css";

export const Result = () => {
  return (
    <div class="main-div">
      <div class="box-div">
        <h1>Resultado</h1>
        <p>
          <h2>
            O resultado do protótipo é apenas informativo, o paciente deve
            consultar um médico para obter um diagnóstico correto e preciso
          </h2>
        </p>
        <Link to="/">
          <Button className="btn-custom">Voltar ao menu</Button>
        </Link>
      </div>
    </div>
  );
};
