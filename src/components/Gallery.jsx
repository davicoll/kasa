import { useEffect, useState } from "react";
import Card from "./Card";
import "../style/gallery.css";

const Gallery = () => {
  //logements state
  const [logements, setLogements] = useState([]);

  //Setstate logements
  useEffect(() => {
    const getLogements = async () => {
      const logementsFromServer = await fetchLoges();
      setLogements(logementsFromServer);
    };

    getLogements();
  }, []);

  //Fetch all logements
  const fetchLoges = async () => {
    const res = await fetch("data.json", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  };

  return (
    <div>
      <div className="gallery-cont">
        {logements.map((logement) => (
          <div key={logement.id} className="card-cont">
            <Card logement={logement} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
