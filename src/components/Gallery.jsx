import { Link } from "react-router-dom";

const cover = "provisorio";

const Gallery = () => {
  return (
    <div>
      <div>
        <Link to="/logement">
          <img src={cover} alt="interieur de ce logement" />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
