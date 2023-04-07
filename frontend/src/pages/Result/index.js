import { Link } from "react-router-dom";
import "../../styles/style.css";

export const Result = () => {
  return (
    <div>
      <h1>Resultado</h1>
      <Link to="/">
        <button>Voltar ao menu</button>
      </Link>
    </div>
  );
};
