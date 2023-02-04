import "../style/toggle.css";

const Toggle = ({ logement }) => {
  const equip = logement.equipments;
  return (
    <div>
      <div className="toggle-cont">
        <div className="toggle">
          <div className="toggle-title">
            <p>Description</p>
            <div className="toggle-arrow-cont">
              <i className="toggle-arrow down"></i>
            </div>
          </div>
          <div className="toggle-textbox">
            <p className="toggle-text">{logement && logement.description}</p>
          </div>
        </div>
        <div className="toggle">
          <div className="toggle-title">
            <p>Équipement</p>
            <div className="toggle-arrow-cont">
              <i className="toggle-arrow down"></i>
            </div>
          </div>
          <div className="toggle-textbox">
            <ul className="toggle-text list">
              {equip && equip.map((equip, i) => <li key={i}>{equip}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
