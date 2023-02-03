import { Link } from "react-router-dom";
import "../style/error.css";

const Error = (props) => {
  return (
    <div className="error-cont">
      <p className="error-num">404</p>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
