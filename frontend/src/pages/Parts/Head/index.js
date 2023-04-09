import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../../../styles/style.css";

export const Head = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [formValues, setFormValues] = useState({
    dor_de_cabeca: false,
    nausea: false,
    sensibilidade_a_luz: false,
    tontura: false,
    visao_turva: false,
  });

  // Função que atualiza o estado quando um campo é modificado
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  return (
    <div>
      <h1>Sintomas na Cabeça</h1>
      <form>
        <label>
          <input
            type="checkbox"
            name="dor_de_cabeca"
            checked={formValues.dor_de_cabeca}
            onChange={handleInputChange}
          />
          Dor de cabeça
        </label>
        <label>
          <input
            type="checkbox"
            name="nausea"
            checked={formValues.nausea}
            onChange={handleInputChange}
          />
          Náusea
        </label>
        <label>
          <input
            type="checkbox"
            name="sensibilidade_a_luz"
            checked={formValues.sensibilidade_a_luz}
            onChange={handleInputChange}
          />
          Sensibilidade a Luz
        </label>
        <label>
          <input
            type="checkbox"
            name="tontura"
            checked={formValues.tontura}
            onChange={handleInputChange}
          />
          Tontura
        </label>
        <label>
          <input
            type="checkbox"
            name="visao_turva"
            checked={formValues.visao_turva}
            onChange={handleInputChange}
          />
          Visão turva
        </label>
        <Link to="/chest">
          <Button type="submit">Próximo</Button>
        </Link>
      </form>
    </div>
  );
};
