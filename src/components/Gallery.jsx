import Card from "./Card";

const Gallery = ({ logements }) => {
  return (
    <div>
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Gallery;
