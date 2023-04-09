import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../styles/style.css";

export const Result = () => {
  return (
    <div className="main-div">
      <div className="box-div">
        <h1>Resultado</h1>
        <h2>
          O resultado do protótipo é apenas informativo, o paciente deve
          consultar um médico para obter um diagnóstico correto e preciso
        </h2>
        <Link to="/">
          <Button className="btn-custom" id="back-menu">
            Voltar ao menu
          </Button>
        </Link>
      </div>
    </div>
  );
};
