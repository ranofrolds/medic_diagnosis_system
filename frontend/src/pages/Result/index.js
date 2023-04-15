import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Doenca from "../../components/Doenca";
import axiosInstance from "../../components/axiosInstances";
import somarArray from "../../components/concatenacaoDados";
import formatarDados from "../../components/formatarDados";
import React, { useState } from "react";

import "../../styles/style.css";

export const Result = () => {
  const [arrayGeral, setArrayGeral] = useState([]);
  const [arrayIndividual, setArrayIndividual] = useState([]);
  const [sintomas, setSintomas] = useState();

  const findCpfInJson = (data, cpf) => {
    data.pacientes.forEach((paciente) => {
      if (paciente.cpf === cpf) {
        return true;
      }
    });
    return false;
  };

  const aux = somarArray("");
  const objeto = formatarDados(aux);
  setSintomas(objeto.sintomas);
  const cpf = objeto.cpf;

  axiosInstance
    .post("/listar_pacientes")
    .then((resposta) => {
      const checkCpf = findCpfInJson(resposta.data, cpf);

      console.log("findCpf: ", checkCpf);

      if (!findCpfInJson) {
        const url = "/processar_diagnostico";
        axiosInstance
          .post(url, objeto)
          .then((resposta) => {
            const arrayDoencas = Object.entries(resposta.data);

            const probabilidadesGerais = arrayDoencas.find(
              (item) => item[0] === "probabilidadesGerais"
            )[1];
            setArrayGeral(
              Object.entries(probabilidadesGerais).sort(
                ([, v1], [, v2]) => v2 - v1
              )
            );

            const probabilidadesIndividuais = arrayDoencas.find(
              (item) => item[0] === "probabilidadesIndividuais"
            )[1];
            setArrayIndividual(
              Object.entries(probabilidadesIndividuais).sort(
                ([, v1], [, v2]) => v2 - v1
              )
            );
          })
          .catch((erro) => {
            console.error("Erro ao enviar objeto:", erro.message);
          });
      }
    })
    .catch((erro) => {
      console.error("Erro ao enviar objeto:", erro.message);
    });

  return (
    <div className="main-div">
      <div className="box-div">
        <h1 id="resultado">Resultado</h1>
        <h2 id="informacao">
          O resultado do protótipo é apenas informativo, o paciente deve
          consultar um médico para obter um diagnóstico correto e preciso
        </h2>
        <div className="resultado-div">
          <div className="resultado-geral">
            <h3>Resultado Geral</h3>

            {arrayGeral.slice(0, 5).map((doenca, index) => (
              <Doenca
                key={index}
                numero={`${index + 1}.`}
                nome={arrayGeral[index][0]}
                chance={(arrayGeral[index][1] * 100).toFixed(1)}
                sintomas={sintomas}
              />
            ))}
          </div>
          <div className="resultado-individual">
            <h3>Resultado Individual</h3>
            {arrayIndividual.slice(0, 5).map((doenca, index) => (
              <Doenca
                key={index}
                numero={`${index + 1}.`}
                nome={arrayIndividual[index][0]}
                chance={(arrayIndividual[index][1] * 100).toFixed(1)}
                sintomas={sintomas}
              />
            ))}
          </div>
        </div>
        <Link to="/">
          <Button
            className="btn-custom"
            id="back-menu"
            onClick={() => {
              setArrayGeral([]);
              setArrayIndividual([]);
            }}
          >
            Voltar ao menu
          </Button>
        </Link>
      </div>
    </div>
  );
};
