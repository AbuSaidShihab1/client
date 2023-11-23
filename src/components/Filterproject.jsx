import React from "react";
import Projectcard from "./Projectcard";

const Filterproject = () => {
  return (
    <div className="project-filter">
      {/* <div className="filter-btn">
        <ul>
          <li>
            <button
              className="activemenu"
              style={{ background: "#fbc531", color: "white" }}
            >
              All
            </button>
          </li>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>All</button>
          </li>
        </ul>
      </div> */}
      <div className="aboutbox-text">
        <div className="side-quote"></div>
        <div className="side-text">All Projects</div>
      </div>
      {/* ------------------projectcard------------------- */}
      <Projectcard />
      {/* ------------------projectcard------------------- */}
    </div>
  );
};

export default Filterproject;
