import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <div>
      <Link to={`/logement/${logement.id}`}>
        <img src={logement.cover} alt="interieur de ce logement" />
        <p>{logement.title}</p>
      </Link>
    </div>
  );
};

export default Card;
