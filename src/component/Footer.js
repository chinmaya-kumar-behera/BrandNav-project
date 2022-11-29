import React from "react";
import "../css/Footer.css";
import facebook from "../image/Facebook.svg";
import instagram from "../image/Instagram.svg";
import twitter from "../image/Twitter.svg";
import logo from "../image/Logo.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} width="100%" height="100%"></img>
          </div>
          <div className="footer-desc">
            <p>
              <span>LaslesVPN</span> is a private virtual network that has
              unique features and has high security.
            </p>
          </div>
          <div className="social-media">
            <div className="media-link">
              <img src={facebook} width="100%" height="100%"></img>
            </div>
            <div className="media-link">
              <img src={instagram} width="100%" height="100%"></img>
            </div>
            <div className="media-link">
              <img src={twitter} width="100%" height="100%"></img>
            </div>
          </div>
          <div className="copy-right">
            <span>©2020LaslesVPN</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-box">
            <h3>Product</h3>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </div>
          <div className="footer-box">
            <h3>Engage</h3>
            <li> LaslesVPN ?</li>
            <li>FAQ </li>
            <li>Tutotials </li>
            <li>About Us </li>
            <li>Privary Policy </li>
            <li> Terms Of Service</li>
          </div>
          <div className="footer-box">
            <h3>Earn Money </h3>
            <li>Affiliate </li>
            <li>Become Partner</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
