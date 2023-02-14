import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "../components/Toggle";
import Carroussel from "../components/Carroussel";
import Host from "../components/Host";
import Error from "./Error";
import "../style/logement.css";

const Logement = () => {
  //One logement state
  const [logement, setLogement] = useState([]);
  //recover url id
  const myUrl = useParams();

  //Set one logement state
  useEffect(() => {
    const getLogements = async () => {
      const logementsFromServer = await fetchLoges();
      const logementOne = logementsFromServer.find(
        (logement) => logement.id === myUrl.id
      );
      setLogement(logementOne);
    };

    getLogements();
  }, []);

  //Fetch all logements
  const fetchLoges = async () => {
    const res = await fetch("http://localhost:3000/data.json", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {!logement ? (
        <Error />
      ) : (
        <div key={logement.id}>
          <Carroussel logement={logement} />
          <div className="loge-info-cont">
            <div className="loge-title-cont">
              <div className="loge-title-text">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
              </div>
              <div className="tags-cont">
                {logement?.tags &&
                  logement?.tags.map((tag, i) => (
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
                toggleText={logement?.description}
              />
            </div>
            <div className="s">
              <Toggle logement={logement} title="Équipements" list={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logement;
