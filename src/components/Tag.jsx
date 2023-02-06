import { IoStarSharp } from "react-icons/io5";
import "../style/tag.css";
const Tag = ({ logement }) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div className="loge-host-info">
        <div className="loge-host-name">{logement?.host?.name}</div>
        <div className="loge-host-photo">
          <img src={logement?.host?.picture} alt="host's face" />
        </div>
      </div>

      <div className="rating">
        {range.map((n) =>
          logement && n <= logement.rating ? (
            <IoStarSharp key={n} className="orange" />
          ) : (
            <IoStarSharp key={n} className="grey" />
          )
        )}
      </div>
    </div>
  );
};

export default Tag;
