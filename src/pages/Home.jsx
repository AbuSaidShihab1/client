import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import rightimg from "../assets/right-img.png";
import About from "../components/About";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="home">
            <div className="home-box home-text">
              <h1>Abu Said Shihab</h1>
              <div className="developer-text">
                <div className="developer-quote"></div>
                <div className="quote-text">Web Developer</div>
              </div>
              <p>
                I'm a full stack web developer, and I'm very passionate and
                dedicated to my work.
              </p>
              <div className="home-btn">
                <button>
                  <Link to="https://wa.me/01688494104" target="_blank">
                    Hire Me
                  </Link>
                </button>
                <button>
                  <Link to="/projects">My Works</Link>
                </button>
              </div>
            </div>
            <div className="home-box home-img">
              <img src={rightimg} alt="" />
            </div>
          </div>
        </div>
        {/* ----------------------about--------------- */}
        <About />
        {/* ----------------------about--------------- */}
        {/*------------------ skill---------------- */}
        <Skill />
        {/*------------------ skill---------------- */}
        {/* -----------------project section----------------- */}
        <Projects />
        {/* -----------------project section----------------- */}
        {/* --------------------blog post------------------- */}
        <Blog />
        {/* --------------------blog post------------------- */}
        {/* ----------------contact------------------------- */}
        <Contact />
        {/* ----------------contact------------------------- */}
      </div>
    </>
  );
};

export default Home;
