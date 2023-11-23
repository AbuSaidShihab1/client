import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Subcard = () => {
  const [project, setproject] = useState([]);
  const navigate = useNavigate();
  function nextpage(id) {
    navigate(`/project-description/${id}`);
    console.log(id);
  }
  useEffect(() => {
    axios
      .get("https://cxcxc.onrender.com/project")
      .then((res) => {
        console.log(res);
        setproject(res.data.projectdata);
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
            <a href="/project-description">
              <img
                src="https://validthemes.net/site-template/ventix/assets/img/blog/2.jpg"
                alt="project"
              />
            </a>
            <div className="card-text">
              <h1>{data.title}</h1>
              <div className="card-info">
                <button
                  onClick={() => {
                    nextpage(data._id);
                  }}
                >
                  Show More
                </button>
                <p>Date:20/10/2020</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Subcard;
