import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Head = () => {
  return (
    <div>
      <h1>Sintomas na cabeça</h1>
      <Link to="/chest">
        <button>Próximo</button>
      </Link>
    </div>
  );
};
