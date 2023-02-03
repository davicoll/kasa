import { Link } from "react-router-dom";
import "../style/gallery.css";

const Gallery = ({ logements }) => {
  return (
    <div>
      <div className="gallery-cont">
        {logements.map((logement) => (
          <div key={logement.id} className="card-cont">
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
        ))}
      </div>
    </div>
  );
};

export default Gallery;
