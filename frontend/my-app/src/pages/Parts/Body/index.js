import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Body = () => {
  return (
    <div>
      <h1>Sintomas no Corpo</h1>
      <Link to="/stomach">
        <button>Próximo</button>
      </Link>
    </div>
  );
};
