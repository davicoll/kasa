import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "../components/Toggle";

const Logement = ({ logements }) => {
  const [logement, setLogement] = useState([]);
  const myUrl = useParams();

  useEffect(() => {
    const logementOne = logements.find((logement) => logement.id === myUrl.id);

    setLogement(logementOne);
  }, []);

  return (
    <div>
      <h2 key={logement.id}>{logement.title}</h2>

      <Toggle logements={logements} logement={logement} />
    </div>
  );
};

export default Logement;
