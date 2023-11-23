import React, { useEffect, useRef, useState } from "react";
import mylogo from "../assets/Abusaid.png";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
const Header = () => {
  const [activeheader, setactiveheader] = useState(false);
  const [activenav, setactivenav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let header = document.getElementById("header");
      if (window.scrollY > 10) {
        setactiveheader(true);
      } else {
        setactiveheader(false);
      }
    });
    let activeicon = document.getElementById("activeicon");
    let navbar = document.querySelector("nav");

    activeicon.addEventListener("click", function () {
      setactivenav(true);
      setactiveheader(true);
    });
  }, []);
  // deactivatenav
  function deactivatenav() {
    setactivenav(false);
    setactiveheader(false);
  }
  return (
    <header id="header" className={activeheader ? "activeheader" : ""}>
      <div className="logo">
        <img src={mylogo} alt="" />
        <h1>Abu Said</h1>
      </div>
      <nav className={activenav ? "activenav" : ""}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
      <div className="side-icon" id="activeicon">
        {activenav ? (
          <button onClick={deactivatenav}>
            <MdOutlineClose />
          </button>
        ) : (
          <button>
            <HiOutlineMenu />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
