import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Description.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Description = () => {
  const { id } = useParams();
  const [projectdesc, setprojectdesc] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://cxcxc.onrender.com/project-desc/${id}`)
      .then((res) => {
        console.log(res);
        setprojectdesc(res.data.projectdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="descripton">
      {/* <Header /> */}
      {projectdesc.map((data) => {
        return (
          <div className="project-descmain" key={data._id}>
            <div className="desc-img">
              <img src={data.image} alt="" />
            </div>

            <div className="desc-text">
              <div className="preview-pro">
                <button>
                  <Link to={data.link} target="_blank">
                    Live Preview
                  </Link>
                </button>
                <p>{data.type}</p>
              </div>
              <h1>{data.title}</h1>
              <p>
                {data.description}{" "}
                <Link to={data.github} target="_blank" className="sourcelink">
                  Source Code
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Description;
