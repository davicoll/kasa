import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "../components/Toggle";
import Carroussel from "../components/Carroussel";
import Tag from "../components/Tag";
import "../style/logement.css";

const Logement = ({ logements }) => {
  const [logement, setLogement] = useState([]);
  const myUrl = useParams();

  useEffect(() => {
    const logementOne = logements.find((logement) => logement.id === myUrl.id);
    const displayLoge = async () => {
      const logementFound = await logementOne;

      setLogement(logementFound);
    };
    displayLoge();
  }, []);

  return (
    <div key={logement.id}>
      <Carroussel logement={logement} />
      <div className="loge-title-cont">
        <div className="loge-title-text">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="loge-host-info">
          <div className="loge-host-name">{logement?.host?.name}</div>
          <div className="loge-host-photo">
            <img src={logement?.host?.picture} alt="host's face" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Tag logement={logement} />
        </div>
      </div>
      <Toggle logement={logement} />
    </div>
  );
};

export default Logement;
