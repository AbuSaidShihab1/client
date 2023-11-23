import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import Projectinfo from "./projectinfo";
import { Link } from "react-router-dom";
import axios from "axios";
const Projects = () => {
  const [projectdata, setprojectdata] = useState([]);
  useEffect(() => {
    axios
      .get(`https://cxcxc.onrender.com/project`)
      .then((res) => {
        console.log(res);
        setprojectdata(res.data.projectdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="projects">
      <div className="projects-text">
        <div className="aboutbox-text">
          <div className="side-quote"></div>
          <div className="side-text">Recent Projects</div>
        </div>
      </div>
      {/* ------------project main--------------- */}
      <div className="project-show">
        {projectdata.slice(0, 3).map((data) => {
          return (
            <div className="project-box" key={data._id}>
              <a href={data.link} target="blank">
                <img src={data.image} alt="project" />
                <div className="project-infotext">
                  <div className="type-project">
                    <p>{data.type}</p>
                    <a href={data.link} target="blank">
                      Preview
                    </a>
                  </div>
                  <div className="web-tag">
                    <div className="tagbox">
                      <span>{data.tag}</span>
                    </div>
                  </div>
                  <h1>
                    {/* {data.title.length > 35
                      ? data.title.slice(0, 35) + "...."
                      : data.title} */}
                  </h1>
                </div>
              </a>
            </div>
          );
        })}
        {projectdata.length == 0 ? <h1>I have no project</h1> : ""}
      </div>
      <div className="loadmore-btn">
        {projectdata.length > 2 ? (
          <Link to="/projects">
            <button>Show More</button>
          </Link>
        ) : (
          ""
        )}
      </div>
      {/* ------------project main--------------- */}
    </div>
  );
};

export default Projects;
