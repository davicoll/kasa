import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "../components/Toggle";
import Carroussel from "../components/Carroussel";
import Host from "../components/Host";
import "../style/logement.css";

const Logement = ({ logements }) => {
  const [logement, setLogement] = useState([]);
  const myUrl = useParams();

  useEffect(() => {
    const logementOne = logements.find((logement) => logement.id === myUrl.id);
    setLogement(logementOne);
  }, []);

  const tags = logement.tags;
  const description = logement.description;

  return (
    <div key={logement.id}>
      <Carroussel logement={logement} />
      <div className="loge-info-cont">
        <div className="loge-title-cont">
          <div className="loge-title-text">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <div className="tags-cont">
            {tags &&
              tags.map((tag, i) => (
                <div className="tags" key={i}>
                  {tag}
                </div>
              ))}
          </div>
        </div>
        <Host logement={logement} />
      </div>
      <div className="loge-toggle">
        <div className="s">
          <Toggle
            logement={logement}
            title="Description"
            toggleText={description}
          />
        </div>
        <div className="s">
          <Toggle logement={logement} title="Équipements" list={true} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
