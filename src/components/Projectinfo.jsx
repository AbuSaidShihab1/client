import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Projectinfo = () => {
  const [project, setproject] = useState([]);
  const navigate = useNavigate();
  function nextpage(id) {
    navigate(`/projects/project-description/${id}`);
  }
  useEffect(() => {
    axios
      .get("https://cxcxc.onrender.com/project")
      .then((res) => {
        console.log(res);
        setproject(res.data.projectdata);
        console.log(res.data.projectdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {project.map((data) => {
        return (
          <div className={`card-box item`} key={data._id}>
            <a href={data.link} target="blank">
              <img src={data.image} alt="project" />
            </a>
            <div className="card-text">
              <h1>
                {/* {data.title.length > 35
                  ? data.title.slice(0, 35) + "...."
                  : data.title} */}
              </h1>
              <div className="web-tag">
                <div className="tagbox">
                  <span>{data.tag}</span>
                </div>
              </div>
              <div className="card-info">
                <button
                  onClick={() => {
                    nextpage(data._id);
                  }}
                >
                  See More
                </button>
                <p>{data.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projectinfo;
