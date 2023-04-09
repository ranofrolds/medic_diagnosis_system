import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../../styles/style.css";

export const Stomach = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [stomachValues, setStomachValues] = useState({
    azia: false,
    dor_no_estomago: false,
  });

  // Função que atualiza o estado quando um campo é modificado
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setStomachValues({ ...stomachValues, [name]: checked });
    console.log(stomachValues);
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <h1>Sintomas no Estômago</h1>
        <form>
          <label>
            <input
              type="checkbox"
              name="azia"
              checked={stomachValues.azia}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Azia
          </label>
          <label>
            <input
              type="checkbox"
              name="dor_no_estomago"
              checked={stomachValues.dor_no_estomago}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Dor no estomago
          </label>
          <Link to="/intimate">
            <Button
              onClick={handleInputChange}
              type="submit"
              className="btn-custom"
            >
              Próximo
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
