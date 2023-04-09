import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ClientContext } from "../../../components/clientContext";
import axiosInstance from "../../../components/axiosInstances";
import Button from "react-bootstrap/Button";

import "../../../styles/style.css";

export const Create = () => {
  const { cpf, setCpf, name, setName, age, setAge } = useContext(ClientContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/auth/signup", {
        cpf: cpf,
        name: name,
        age: age,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Cadastro Paciente</h1>
      <div class="login-div">
        <form onSubmit={handleSubmit} action="#">
          <div class="input-box">
            <span class="icon"></span>
            <input
              type="text"
              required
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <label>CPF</label>
          </div>

          <div class="input-box">
            <span class="icon"></span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Nome</label>
          </div>

          <div class="input-box">
            <span class="icon"></span>
            <input
              type="number"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Idade</label>
          </div>
          <Link to="/head">
            <Button>Cadastrar</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
