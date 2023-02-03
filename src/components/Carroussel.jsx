//provisorio
import "../style/carroussel.css";

const Carroussel = ({ logement }) => {
  return (
    <div className="carroussel">
      {logement.pictures ? (
        <img
          className="carroussel-img"
          src={logement.pictures[1]}
          alt="interieur du logement"
        />
      ) : null}
    </div>
  );
};

export default Carroussel;
