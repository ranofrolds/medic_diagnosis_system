import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import somarArray from "../../../components/concatenacaoDados";

import "../../../styles/style.css";

export const Head = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [headValues, setHeadValues] = useState({
    dor_de_cabeca: false,
    nausea: false,
    sensibilidade_a_luz: false,
    tontura: false,
    visao_turva: false,
  });

  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setHeadValues({ ...headValues, [name]: checked });
  };

  const handleSubmit = (event) => {
    somarArray(headValues);
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <h1>Sintomas na Cabeça</h1>
        <form>
          <label>
            <input
              type="checkbox"
              name="dor_de_cabeca"
              checked={headValues.dor_de_cabeca}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Dor de cabeça
          </label>
          <label>
            <input
              type="checkbox"
              name="nausea"
              checked={headValues.nausea}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Náusea
          </label>
          <label>
            <input
              type="checkbox"
              name="sensibilidade_a_luz"
              checked={headValues.sensibilidade_a_luz}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Sensibilidade a Luz
          </label>
          <label>
            <input
              type="checkbox"
              name="tontura"
              checked={headValues.tontura}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Tontura
          </label>
          <label>
            <input
              type="checkbox"
              name="visao_turva"
              checked={headValues.visao_turva}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Visão turva
          </label>
          <Link to="/chest">
            <Button onClick={handleSubmit} type="submit" className="btn-custom">
              Próximo
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
