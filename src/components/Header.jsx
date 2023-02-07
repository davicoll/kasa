import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../style/header.css";

const Header = () => {
  return (
    <header className="parent">
      <div className="header-cont">
        <div>
          <img src={logo} alt="logo kasa" />
        </div>
        <nav className="header-nav">
          <Link to="/" className="header-link">
            <h3>Accueil</h3>
          </Link>
          <Link to="/apropos" className="header-link">
            <h3>A Propos</h3>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
