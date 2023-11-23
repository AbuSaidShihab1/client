import React from "react";
import Header from "../components/Header";
import "../styles/Allproject.css";
import projectrightimg from "../assets/project.png";
import Footer from "../components/Footer";
import Filterproject from "../components/Filterproject";
import otherimg from "../assets/other.png";
import { Link } from "react-router-dom";
const Allproject = () => {
  return (
    <div className="myprojects">
      <div className="project-main">
        <div className="project-showcase">
          <div className="shocase-text">
            <h1>All Projects</h1>
            <p>
              I have created many types of projects, here are some projects that
              I have created and I have added project description
            </p>
            <button>
              <Link to="https://wa.me/01688494104" target="_blank">
                Hire Me
              </Link>
            </button>
          </div>
          <div className="shocase-img">
            <img src={projectrightimg} alt="" />
          </div>
        </div>
      </div>
      {/*----------- All-project----------- */}
      <Filterproject />
      {/*----------- All-project----------- */}
      {/*----------------- others section---------------- */}
      <section className="other-section">
        <div className="other-subsection">
          <div className="other-left otherbox">
            <img src={otherimg} alt="" />
          </div>
          <div className="other-right otherbox">
            <h1>Lat’s make someting great together</h1>
            <button>
              <Link to="https://wa.me/01688494104" target="_blank">
                Hire Me
              </Link>
            </button>
          </div>
        </div>
      </section>
      {/*----------------- others section---------------- */}
    </div>
  );
};

export default Allproject;
