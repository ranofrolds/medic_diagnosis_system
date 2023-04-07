import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Chest = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [formValues, setFormValues] = useState({
    chiado_no_peito: false,
    falta_de_ar: false,
    tosse_persistente: false,
    tosse_seca: false,
  });

  // Função que atualiza o estado quando um campo é modificado
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  return (
    <div>
      <h1>Sintomas no Peito</h1>
      <form>
        <label>
          <input
            type="checkbox"
            name="chiado_no_peito"
            checked={formValues.chiado_no_peito}
            onChange={handleInputChange}
          />
          Chiado no peito
        </label>
        <label>
          <input
            type="checkbox"
            name="falta_de_ar"
            checked={formValues.falta_de_ar}
            onChange={handleInputChange}
          />
          Falta de ar
        </label>
        <label>
          <input
            type="checkbox"
            name="tosse_persistente"
            checked={formValues.tosse_persistente}
            onChange={handleInputChange}
          />
          Tosse persistente
        </label>
        <label>
          <input
            type="checkbox"
            name="tosse_seca"
            checked={formValues.tosse_seca}
            onChange={handleInputChange}
          />
          Tosse seca
        </label>
        <Link to="/body">
          <button type="submit">Próximo</button>
        </Link>
      </form>
    </div>
  );
};
