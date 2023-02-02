import { useParams } from "react-router-dom";
import Toggle from "../components/Toggle";

const Logement = ({ logements }) => {
  return (
    <div>
      <h2 key={logements.id}>{logements.title}</h2>
      Logements
      <Toggle logements={logements} />
    </div>
  );
};

export default Logement;
