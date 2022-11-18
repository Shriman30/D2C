import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="contactUs">
      <div className="header">
        <h1>Contact Us</h1>
      </div>
      <div className="content">
        <div className="form-container">
          <p className="formheader">Contact us! We would love to help you! </p>
          <form className="form" action="onSubmit">
            <div className="user-form-input">
              <input type="text" name="name" id="name" placeholder="Name" />
              <br />
              <input type="email" name="emeil" id="email" placeholder="Email" />
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <br />
            <button id="sendbtn">Send</button>
          </form>
        </div>
        <div className="line"></div>
        <div className="survey">
          <div className="surveyMessage">
            <h3 id="message-header">Thank you for Visiting D2C!</h3>
            <p id="message-body">
              Please take a moment to answer this short survey in order to help
              us enhance your experience with our website.
            </p>
          </div>
          <div className="survey-container">
            <img id="survey" src={require("./survey.png")} alt="survey" />
            <a
              id="link-to-survey"
              href="https://docs.google.com/forms/d/1jCrWnW62yYV00c4p8vXs_ihCfPHBXVAEZgMB0_z7sjw/edit?ts=6375b3d3"
            >
              Survey
            </a>
          </div>
          <div className="contact">
            <div className="email">
              <img
                id="email-icon"
                src={require("./Contact us 1.png")}
                alt=""
                width={"250px"}
              />
              <p id="email-address">info@d2c.com</p>
            </div>
            <div className="phone">
              <img
                id="phone-icon"
                src={require("./Contact us 1 (2).png")}
                alt=""
                width={"250px"}
              />
              <p id="number">(514)-321-7654</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
