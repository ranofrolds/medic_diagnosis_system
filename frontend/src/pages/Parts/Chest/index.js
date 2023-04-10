import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import somarArray from "../../../components/concatenacaoDados";

import "../../../styles/style.css";

export const Chest = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [chestValues, setChestValues] = useState({
    chiado_no_peito: false,
    falta_de_ar: false,
    tosse_persistente: false,
    tosse_seca: false,
  });

  // Função que atualiza o estado quando um campo é modificado
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setChestValues({ ...chestValues, [name]: checked });
  };

  const handleSubmit = (event) => {
    somarArray(chestValues);
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <h1>Sintomas no Peito</h1>
        <form>
          <label>
            <input
              type="checkbox"
              name="chiado_no_peito"
              checked={chestValues.chiado_no_peito}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Chiado no peito
          </label>
          <label>
            <input
              type="checkbox"
              name="falta_de_ar"
              checked={chestValues.falta_de_ar}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Falta de ar
          </label>
          <label>
            <input
              type="checkbox"
              name="tosse_persistente"
              checked={chestValues.tosse_persistente}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Tosse persistente
          </label>
          <label>
            <input
              type="checkbox"
              name="tosse_seca"
              checked={chestValues.tosse_seca}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Tosse seca
          </label>
          <Link to="/body">
            <Button onClick={handleSubmit} type="submit" className="btn-custom">
              Próximo
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
