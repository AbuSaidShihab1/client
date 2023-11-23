import React from "react";
import "../styles/Blog.css";
const Blog = () => {
  return (
    <div className="blog-main">
      <div className="aboutbox-text">
        <div className="side-quote"></div>
        <div className="side-text">Blog Post</div>
      </div>
      {/* ---------------blog box---------------------- */}
      <div className="blogs">
        <div className="blog-box">
          <img
            src="https://images.pexels.com/photos/17218107/pexels-photo-17218107/free-photo-of-niteroy-city-park-charitas-brazil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
          />
          <div className="bloginfo-text">
            <h1>How to Build Successful Business Startup.</h1>
            <div className="date-info">
              <h4>22/11/2023</h4>
              <h3>Abu Said</h3>
            </div>
          </div>
        </div>
        <div className="blog-box">
          <img
            src="https://images.pexels.com/photos/973231/pexels-photo-973231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
          />
          <div className="bloginfo-text">
            <h1>We create some things for your success in future growth</h1>
            <div className="date-info">
              <h4>14/11/2023</h4>
              <h3>Abu Said</h3>
            </div>
          </div>
        </div>
        <div className="blog-box">
          <img
            src="https://images.pexels.com/photos/18309488/pexels-photo-18309488/free-photo-of-cloud-covered-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
          />
          <div className="bloginfo-text">
            <h1>Creative advertising in our life became a info noise</h1>
            <div className="date-info">
              <h4>12/11/2023</h4>
              <h3>Abu Said</h3>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------blog box---------------------- */}
    </div>
  );
};

export default Blog;
