const Tag = ({ logement }) => {
  return (
    <div>
      {logement.tags.map((tag) => (
        <div>${tag}</div>
      ))}
    </div>
  );
};

export default Tag;
