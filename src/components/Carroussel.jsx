//provisorio
import { useState } from "react";
import "../style/carroussel.css";

const Carroussel = ({ logement }) => {
  const total = logement.pictures?.length;
  const [index, setIndex] = useState(0);

  const clickHandler1 = () => {
    if (index < total - 1) {
      const newindex = index + 1;
      setIndex(newindex);
    }
  };
  const clickHandler2 = () => {
    if (index > 0) {
      const newindex = index - 1;
      setIndex(newindex);
    }
  };

  return (
    <div className="carroussel">
      {total > 1 && <div className="arrow left" onClick={clickHandler2}></div>}
      {logement.pictures ? (
        <img
          className="carroussel-img"
          src={logement.pictures[index]}
          alt="interieur du logement"
        />
      ) : null}
      {total > 1 && (
        <div className="counting">
          {index + 1}/{total}
        </div>
      )}
      {total > 1 && <div className="arrow right" onClick={clickHandler1}></div>}
    </div>
  );
};

export default Carroussel;
