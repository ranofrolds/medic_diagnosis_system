import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Body = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [formValues, setFormValues] = useState({
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
    setFormValues({ ...formValues, [name]: checked });
  };

  return (
    <div>
      <h1>Sintomas no Corpo</h1>
      <form>
        <label>
          <input
            type="checkbox"
            name="coceira"
            checked={formValues.coceira}
            onChange={handleInputChange}
          />
          Coceira
        </label>
        <label>
          <input
            type="checkbox"
            name="dor_na_pele"
            checked={formValues.dor_na_pele}
            onChange={handleInputChange}
          />
          Dor na pele
        </label>
        <label>
          <input
            type="checkbox"
            name="dor_no_corpo"
            checked={formValues.dor_no_corpo}
            onChange={handleInputChange}
          />
          Dor no corpo
        </label>
        <label>
          <input
            type="checkbox"
            name="fadiga"
            checked={formValues.fadiga}
            onChange={handleInputChange}
          />
          Fadiga
        </label>
        <label>
          <input
            type="checkbox"
            name="febre"
            checked={formValues.febre}
            onChange={handleInputChange}
          />
          Febre
        </label>
        <label>
          <input
            type="checkbox"
            name="febre_alta"
            checked={formValues.febre_alta}
            onChange={handleInputChange}
          />
          Febre alta
        </label>
        <label>
          <input
            type="checkbox"
            name="inflamacao_na_pele"
            checked={formValues.inflamacao_na_pele}
            onChange={handleInputChange}
          />
          Inflamação na pele
        </label>
        <label>
          <input
            type="checkbox"
            name="palidez"
            checked={formValues.palidez}
            onChange={handleInputChange}
          />
          Palidez
        </label>
        <label>
          <input
            type="checkbox"
            name="perda_de_peso"
            checked={formValues.perda_de_peso}
            onChange={handleInputChange}
          />
          Perda de pesa
        </label>
        <Link to="/stomach">
          <button type="submit">Próximo</button>
        </Link>
      </form>
    </div>
  );
};
