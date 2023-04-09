import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../../styles/style.css";

export const Body = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [bodyValues, setBodyValues] = useState({
    coceira: false,
    dor_na_pele: false,
    dor_no_corpo: false,
    fadiga: false,
    febre: false,
    febre_alta: false,
    inflamacao_na_pele: false,
    palidez: false,
    perda_de_peso: false,
  });

  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setBodyValues({ ...bodyValues, [name]: checked });
    console.log(bodyValues);
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <h1>Sintomas no Corpo</h1>
        <form>
          <label>
            <input
              type="checkbox"
              name="coceira"
              checked={bodyValues.coceira}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Coceira
          </label>
          <label>
            <input
              type="checkbox"
              name="dor_na_pele"
              checked={bodyValues.dor_na_pele}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Dor na pele
          </label>
          <label>
            <input
              type="checkbox"
              name="dor_no_corpo"
              checked={bodyValues.dor_no_corpo}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Dor no corpo
          </label>
          <label>
            <input
              type="checkbox"
              name="fadiga"
              checked={bodyValues.fadiga}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Fadiga
          </label>
          <label>
            <input
              type="checkbox"
              name="febre"
              checked={bodyValues.febre}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Febre
          </label>
          <label>
            <input
              type="checkbox"
              name="febre_alta"
              checked={bodyValues.febre_alta}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Febre alta
          </label>
          <label>
            <input
              type="checkbox"
              name="inflamacao_na_pele"
              checked={bodyValues.inflamacao_na_pele}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Inflamação na pele
          </label>
          <label>
            <input
              type="checkbox"
              name="palidez"
              checked={bodyValues.palidez}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Palidez
          </label>
          <label>
            <input
              type="checkbox"
              name="perda_de_peso"
              checked={bodyValues.perda_de_peso}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Perda de pesa
          </label>
          <Link to="/stomach">
            <Button onClick={handleInputChange} type="submit" className="btn-custom">
              Próximo
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
