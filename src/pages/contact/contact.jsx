import React from "react";
import { Link } from "react-router-dom";
import "./contact.css"

export const Contact = () => {
  return(
    <div>
      <section id="contact-section">
        <div className="container">
          <div className="contact">
            <div className="contact-subtitle">CONTACT US</div>
            <div className="contact-title">Ready. Set. Smile</div>
            <div className="contact-txt">Take the free online assessment to see if you are a candidate and get
              started on your journey.</div>
            <Link to="/"> 
            <div className="contact-link">GET HELP NOW</div>
            </Link>
          </div>
        </div>
        <div className="contact-img"></div>
      </section>
    </div>
  )
};
