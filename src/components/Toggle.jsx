import "../style/toggle.css";
import { useState } from "react";

const Toggle = ({ logement, list, title, toggleText }) => {
  //Tggle state
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const equip = logement?.equipments;

  return (
    <div className="toggle">
      <div className="toggle-title">
        <p>{title}</p>
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
          {list ? (
            <ul className="toggle-text list">
              {equip && equip.map((equip, i) => <li key={i}>{equip}</li>)}
            </ul>
          ) : (
            <p className="toggle-text">{toggleText}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Toggle;
