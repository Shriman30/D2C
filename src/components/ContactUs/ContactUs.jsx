import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="contactUs">
      <div className="header">
        <h1>Contact Us</h1>
      </div>
      <div className="content">
        <div className="contact-info">
          <div className="email">
            <img src={require('./Contact us 1 (2).png')} />
            <p className="email-text">info@d2c.com</p>
          </div>
          <div className="phone">
              <img src={require('./Contact us 1.png')} width={'400px'}/>
            <p className="phone-text">(514)-321-7654</p>
          </div>
        </div>
        <div className="form-container">
          <div className="form">
            <form action="onSubmit">
              <input type="text" placeholder="Name" /><br />
              <input type="email" placeholder="Email" /><br />
              <textarea className="message" name="Message" id="message" cols="30" rows="10"placeholder="Message"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
