import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Doenca from "../../components/Doenca";

import "../../styles/style.css";

export const Result = () => {
  return (
    <div className="main-div">
      <div className="box-div">
        <h1 id="resultado">Resultado</h1>
        <h2 id="informacao">
          O resultado do protótipo é apenas informativo, o paciente deve
          consultar um médico para obter um diagnóstico correto e preciso
        </h2>
        <div className="resultado-div">
          <div className="resultado-geral">
            <h3>Resultado Geral</h3>
            <Doenca numero="1." nome="asma"></Doenca>
            <Doenca numero="2." nome="asma"></Doenca>
            <Doenca numero="3." nome="asma"></Doenca>
            <Doenca numero="4." nome="asma"></Doenca>
            <Doenca numero="5." nome="asma"></Doenca>
          </div>
          <div className="resultado-individual">
            <h3>Resultado Individual</h3>
            <Doenca numero="1." nome="asma"></Doenca>
            <Doenca numero="2." nome="asma"></Doenca>
            <Doenca numero="3." nome="asma"></Doenca>
            <Doenca numero="4." nome="asma"></Doenca>
            <Doenca numero="5." nome="asma"></Doenca>
          </div>
        </div>
        <Link to="/">
          <Button className="btn-custom" id="back-menu">
            Voltar ao menu
          </Button>
        </Link>
      </div>
    </div>
  );
};
