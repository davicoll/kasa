import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../style/header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="parent">
      <div className="header-cont">
        <div>
          <img src={logo} alt="logo kasa" />
        </div>
        <nav className="header-nav">
          <Link to="/" className="header-link">
            {location.pathname === "/" ? (
              <h3 className="underline">Accueil</h3>
            ) : (
              <h3>Accueil</h3>
            )}
          </Link>
          <Link to="/apropos" className="header-link">
            {location.pathname === "/apropos" ? (
              <h3 className="underline">A Propos</h3>
            ) : (
              <h3>A Propos</h3>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
