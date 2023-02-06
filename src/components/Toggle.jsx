import "../style/toggle.css";
import { useState } from "react";

const Toggle = ({ logement }) => {
  //Tggle state
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const [toggle1, setToggle1] = useState(true);

  const handleClick1 = () => {
    setToggle1(!toggle1);
  };

  const equip = logement.equipments;

  return (
    <div>
      <div className="toggle-cont">
        <div className="toggle s">
          <div className="toggle-title">
            <p>Description</p>
            <div className="toggle-arrow-cont" onClick={handleClick}>
              {toggle ? (
                <i className="toggle-arrow up"></i>
              ) : (
                <i className="toggle-arrow down"></i>
              )}
            </div>
          </div>
          {toggle && (
            <div className="toggle-textbox">
              <p className="toggle-text">{logement && logement.description}</p>
            </div>
          )}
        </div>
        <div className="toggle s">
          <div className="toggle-title">
            <p>Équipement</p>
            <div className="toggle-arrow-cont" onClick={handleClick1}>
              {toggle1 ? (
                <i className="toggle-arrow up"></i>
              ) : (
                <i className="toggle-arrow down"></i>
              )}
            </div>
          </div>
          {toggle1 && (
            <div className="toggle-textbox">
              <ul className="toggle-text list">
                {equip && equip.map((equip, i) => <li key={i}>{equip}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toggle;
