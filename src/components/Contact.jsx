import React from "react";
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact-main">
      <div className="aboutbox-text">
        <div className="side-quote"></div>
        <div className="side-text">Contact</div>
      </div>
      <div className="contact">
        <div className="contact-box contact-left">
          <h1>Get In Touch</h1>
          {/* <p className="firstparagraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            distinctio est quia eaque, eos sunt!
          </p> */}
          <div className="address-box">
            <GrLocation />
            <p>Dhaka,Bangladesh</p>
          </div>
          <div className="address-box">
            <TfiEmail />
            <p>shihabmoni15@gmail.com</p>
          </div>
          <div className="address-box">
            <LuPhoneCall />
            <p>+8801688494104</p>
          </div>
          <div className="socila-media"></div>
        </div>
        <div className="contact-box contact-right">
          <form action="https://formspree.io/f/xrgwvlok" method="post">
            <div className="inp-field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="inp-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="inp-field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
