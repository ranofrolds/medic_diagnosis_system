import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../../styles/style.css";

export const Intimate = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [formValues, setFormValues] = useState({
    coceira_anal: false,
    dor_ao_evacuar: false,
    sangramento_ao_evacuar: false,
  });

  // Função que atualiza o estado quando um campo é modificado
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  return (
    <div class="main-div">
      <div class="box-div">
        <h1>Sintomas nas Regiões Íntimas</h1>
        <form>
          <label>
            <input
              type="checkbox"
              name="coceira_anal"
              checked={formValues.coceira_anal}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Coceira anal
          </label>
          <label>
            <input
              type="checkbox"
              name="dor_ao_evacuar"
              checked={formValues.dor_ao_evacuar}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Dor ao evacuar
          </label>
          <label>
            <input
              type="checkbox"
              name="sangramento_ao_evacuar"
              checked={formValues.sangramento_ao_evacuar}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Sangramento ao evacuar
          </label>
          <Link to="/result">
            <Button type="submit">Finalizar consulta</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
