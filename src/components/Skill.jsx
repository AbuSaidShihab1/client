import React from "react";
import "../styles/Skill.css";
const Skill = () => {
  return (
    <div className="about-second" id="about">
      <div className="aboutbox-textsecond">
        <div className="side-quote"></div>
        <div className="side-text">Experiance</div>
      </div>
      <div className="about-main">
        <div className="aboutbox aboutleft">
          <p>
            I am a full stack web developer.I know HTML,CSS,Tailwind CSS,React
            JS,NodeJS,MongoDB.I enjoy developing simple, clean and slick
            websites that provide real value to the end user.
          </p>
          <p>
            I also have knowledge about figma,npm,git,github.I can design
            website using figma., I have acquired the skills and knowledge
            necessary to make your project a success.
          </p>
          <p>
            I also expert in both frontend and backend web development.You can
            hire me.
          </p>
          <div className="skill-img"></div>
        </div>
        <div className="aboutbox aboutright">
          <div className="skmain">
            <div className="skbox">
              <div className="aktext">
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div className="subskbox">
                <div className="smskbox" id="sk1"></div>
              </div>
            </div>
            <div className="skbox">
              <div className="aktext">
                <p>CSS</p>
                <p>85%</p>
              </div>
              <div className="subskbox">
                <div className="smskbox" id="sk2"></div>
              </div>
            </div>
            <div className="skbox">
              <div className="aktext">
                <p>Tailwind CSS</p>
                <p>90%</p>
              </div>
              <div className="subskbox">
                <div className="smskbox" id="sk1"></div>
              </div>
            </div>
            <div className="skbox">
              <div className="aktext">
                <p>Javascript</p>
                <p>80%</p>
              </div>
              <div className="subskbox">
                <div className="smskbox" id="sk3"></div>
              </div>
            </div>
            <div className="skbox">
              <div className="aktext">
                <p>React JS</p>
                <p>70%</p>
              </div>
              <div className="subskbox">
                <div className="smskbox" id="sk4"></div>
              </div>
            </div>
            <div className="skbox">
              <div className="aktext">
                <p>NodeJS</p>
                <p>80%</p>
              </div>
              <div className="subskbox">
                <div className="smskbox" id="sk5"></div>
              </div>
            </div>

            <div class="skbox">
              <div class="aktext">
                <p>Mongodb</p>
                <p>80%</p>
              </div>
              <div class="subskbox">
                <div class="smskbox" id="sk6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
