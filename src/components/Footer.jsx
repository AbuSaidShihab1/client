import React from "react";
import mylogo from "../assets/Abusaid.png";
import "../styles/Footer.css";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-box footerbox1">
        <div className="social-icon">
          <Link
            to="https://www.facebook.com/profile.php?id=100084654139671"
            target="blank"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://github.com/AbuSaidShihab1" target="blank">
            <FaGithub />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://www.youtube.com/@programmingperson" target="blank">
            <IoLogoYoutube />
          </Link>
        </div>
      </div>
      <div className="footer-box footerbox2">
        <div className="footer-logo">
          <img src={mylogo} alt="" />
        </div>
        <div className="footer-text">
          <p>© 2023 by Abu Said Shihab</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
