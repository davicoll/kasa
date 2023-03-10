import React from "react";
import logoFooter from "../assets/Logo_footer.png";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer-cont">
      <img src={logoFooter} alt="logo kasa" className="footer-img" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
