import "../style/host.css";
const Host = ({ logement }) => {
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
            <i key={n} className="orange fa-solid fa-star" />
          ) : (
            <i key={n} className="grey fa-solid fa-star" />
          )
        )}
      </div>
    </div>
  );
};

export default Host;
