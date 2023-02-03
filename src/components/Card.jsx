import { Link } from "react-router-dom";
import "../style/gallery.css";

const Card = ({ logement }) => {
  return (
    <div>
      <Link to={`/logement/${logement.id}`}>
        <img
          className="card-link"
          src={logement.cover}
          alt="interieur de ce logement"
        />
        <p>{logement.title}</p>
      </Link>
    </div>
  );
};

export default Card;
