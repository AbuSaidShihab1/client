import React from "react";
import aboutimg from "../assets/about.png";
import { Link } from "react-router-dom";
import resumefile from "../assets/resume.png";
import { AiOutlineFileText } from "react-icons/ai";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div className="aboutbox about-img">
        <img src={aboutimg} alt="" />
      </div>
      <div className="aboutbox about-info">
        <div className="aboutbox-text">
          <div className="side-quote"></div>
          <div className="side-text">About Me</div>
        </div>
        <p>
          Hi ,My name is Abu Said Shihab.I am a web designer and Developer.I
          have 2years experiance of web development . I Worked on many
          projects.I know how to create a beautiful responsive website.I can
          create website for you.If you want to give me any project .You can
          hire me.
        </p>
        <button>
          <a href={resumefile} download>
            Download CV
          </a>
          <AiOutlineFileText />
        </button>
      </div>
    </div>
  );
};

export default About;
