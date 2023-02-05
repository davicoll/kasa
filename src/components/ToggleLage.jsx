import "../style/toggle.css";
import { useState } from "react";

const ToggleLage = () => {
  //Tggle state
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const [toggle1, setToggle1] = useState(true);

  const handleClick1 = () => {
    setToggle1(!toggle1);
  };
  const [toggle2, setToggle2] = useState(true);

  const handleClick2 = () => {
    setToggle2(!toggle2);
  };
  const [toggle3, setToggle3] = useState(true);

  const handleClick3 = () => {
    setToggle3(!toggle3);
  };
  return (
    <div>
      <div className="toggle-cont">
        <div className="toggle l">
          <div className="toggle-title ">
            <p className="large">Fiabilité</p>
            <div onClick={handleClick} className="toggle-arrow-cont">
              {toggle ? (
                <i className="toggle-arrow up"></i>
              ) : (
                <i className="toggle-arrow down"></i>
              )}
            </div>
          </div>
          {toggle && (
            <div className="toggle-textbox">
              <p className="toggle-text large">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
          )}
        </div>
        <div className="toggle l">
          <div className="toggle-title">
            <p className="large">Respect</p>
            <div onClick={handleClick1} className="toggle-arrow-cont">
              {toggle1 ? (
                <i className="toggle-arrow up"></i>
              ) : (
                <i className="toggle-arrow down"></i>
              )}
            </div>
          </div>
          {toggle1 && (
            <div className="toggle-textbox">
              <p className="toggle-text large">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          )}
        </div>
        <div className="toggle l">
          <div className="toggle-title">
            <p className="large">Service</p>
            <div onClick={handleClick2} className="toggle-arrow-cont">
              {toggle2 ? (
                <i className="toggle-arrow up"></i>
              ) : (
                <i className="toggle-arrow down"></i>
              )}
            </div>
          </div>
          {toggle2 && (
            <div className="toggle-textbox">
              <p className="toggle-text large">
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            </div>
          )}
        </div>
        <div className="toggle l">
          <div className="toggle-title">
            <p className="large">Responsabilité</p>
            <div onClick={handleClick3} className="toggle-arrow-cont">
              {toggle3 ? (
                <i className="toggle-arrow up"></i>
              ) : (
                <i className="toggle-arrow down"></i>
              )}
            </div>
          </div>
          {toggle3 && (
            <div className="toggle-textbox">
              <p className="toggle-text large">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleLage;
