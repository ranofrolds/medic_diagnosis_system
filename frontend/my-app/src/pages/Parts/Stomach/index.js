import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const Stomach = () => {
  return (
    <div>
      <h1>Sintomas no estomago</h1>
      <Link to="/intimate">
        <button>Próximo</button>
      </Link>
    </div>
  );
};
