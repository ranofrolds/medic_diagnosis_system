import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import somarArray from "../../../components/concatenacaoDados";
import axiosInstance from "../../../components/axiosInstances";
import formatarDados from "../../../components/formatarDados";

import "../../../styles/style.css";

export const Intimate = () => {
  //Define um estado para armazenar os valores dos campos do formulário
  const [intimateValues, setIntimateValues] = useState({
    coceira_anal: false,
    dor_ao_evacuar: false,
    sangramento_ao_evacuar: false,
  });

  // Função que atualiza o estado quando um campo é modificado
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setIntimateValues({ ...intimateValues, [name]: checked });
  };

  const handleSubmit = (event) => {
    const aux = somarArray(intimateValues);
    const objeto = formatarDados(aux);
    const url = "http://localhost:8000/processar_diagnostico";
    axiosInstance
      .post(url, objeto)
      .then((resposta) => {
        console.log("Resposta do servidor:", resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao enviar objeto:", erro.message);
      });
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <h1>Sintomas nas Regiões Íntimas</h1>
        <form>
          <label>
            <input
              type="checkbox"
              name="coceira_anal"
              checked={intimateValues.coceira_anal}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Coceira anal
          </label>
          <label>
            <input
              type="checkbox"
              name="dor_ao_evacuar"
              checked={intimateValues.dor_ao_evacuar}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Dor ao evacuar
          </label>
          <label>
            <input
              type="checkbox"
              name="sangramento_ao_evacuar"
              checked={intimateValues.sangramento_ao_evacuar}
              onChange={handleInputChange}
            />
            <span>&nbsp;</span>Sangramento ao evacuar
          </label>

          <Link to="/result">
            <Button type="button" className="btn-custom" onClick={handleSubmit}>
              Finalizar consulta
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
