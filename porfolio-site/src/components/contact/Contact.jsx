import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Phone</h3>
            <p>(+359) 877878477</p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h3>Email</h3>
            <p>hristiyan.borisov@rwth-aachen.de</p>
          </div>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <div className="contact-details">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/hristiyan-borisov-0a763a224/" target="_blank" rel="noopener noreferrer">
              Visit my LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
