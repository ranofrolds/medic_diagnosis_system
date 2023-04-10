import { Link } from "react-router-dom";
import React, { useState } from "react";
import somarArray from "../../../components/concatenacaoDados"
import Button from "react-bootstrap/Button";

import "../../../styles/style.css";

export const Create = () => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    somarArray(cpf);
    somarArray(name);
    somarArray(age);
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <h1>Cadastro Paciente</h1>
        <div className="login-div">
          <form>
            <div className="input-box">
              <input
                type="text"
                required
                value={cpf}
                onChange={(e) => {
                  setCpf(e.target.value);
                }}
              />
              <label>CPF</label>
            </div>

            <div className="input-box">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Nome</label>
            </div>

            <div className="input-box">
              <input
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <label>Idade</label>
            </div>
            <Link to="/head">
              <Button onClick={handleSubmit} className="btn-custom">
                Cadastrar
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
