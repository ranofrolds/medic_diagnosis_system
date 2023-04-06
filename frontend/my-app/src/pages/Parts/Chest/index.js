import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Chest = () => {
  return (
    <div>
      <h1>Sintomas no peito</h1>
      <Link to="/body">
        <button>Próximo</button>
      </Link>
    </div>
  );
};
