import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../../styles/style.css";

export const Stomach = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [formValues, setFormValues] = useState({
    azia: false,
    dor_no_estomago: false,
  });

  // Função que atualiza o estado quando um campo é modificado
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  return (
    <div class="main-div">
      <div class="box-div">
        <h1>Sintomas no Estômago</h1>
        <form>
          <label>
            <input
              type="checkbox"
              name="azia"
              checked={formValues.azia}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Azia
          </label>
          <label>
            <input
              type="checkbox"
              name="dor_no_estomago"
              checked={formValues.dor_no_estomago}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Dor no estomago
          </label>
          <Link to="/intimate">
            <Button type="submit">Próximo</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
