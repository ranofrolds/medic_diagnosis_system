import { Link } from "react-router-dom";
import "../../styles/style.css";

export const Patients = () => {
  
  axios.get('http://localhost:8000/listar_pacientes')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <div>
      <h1>Listagem Pacientes</h1>
      <Link to="/">
        <p>Voltar ao menu principal</p>
      </Link>
    </div>
  );
};
