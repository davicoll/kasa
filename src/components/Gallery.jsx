import { Link } from "react-router-dom";

const cover = "provisorio";

const Gallery = ({ logements }) => {
  return (
    <div>
      {logements.map((logement) => (
        <Link to="/logement">
          <div key={logement.id}>
            <img src={logement.cover} alt="interieur de ce logement" />
            <p>{logement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
