import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../styles/style.css";

export const Consult = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div class="main-div">
      <div class="box-div">
        <h1>Listagem Pacientes</h1>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Atualização de paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Novo nome: </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Sair
              </Button>{" "}
              <Button variant="primary">Salvar alterações</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          {" "}
          {/* adicionar botão para abrir o Modal */}
          Atualizar paciente
        </Button>
        <Link to="/">
          <p>Voltar ao menu principal</p>
        </Link>
      </div>
    </div>
  );
};
