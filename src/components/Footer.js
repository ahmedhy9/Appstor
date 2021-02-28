import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our Add</h3>
            <p>Download App for Androide and Ios mobile phone</p>
            <div className="app-logo">
              <img src="images/play-store.png" />
              <img src="images/app-store.png" />
            </div>
          </div>
          <div className="footer-col-2">
            <img src="images/logo-white.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quibusdam expedita amet nisi nobis dolorum obcaecati
              id vero, quam consequatur?
            </p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Couafa</li>
              <li>Blog Post</li>
              <li>Return plity</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-3">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instgram</li>
              <li>Tiwtter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
