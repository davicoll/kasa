import { Link } from "react-router-dom";
import "../style/gallery.css";

const Card = ({ logement }) => {
  return (
    <div>
      <div>
        <Link className="card-link" to={`/logement/${logement.id}`}>
          <img
            className="card-img"
            src={logement.cover}
            alt="interieur de ce logement"
          />
          <div className="color-overlay"></div>
          <p>{logement.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
