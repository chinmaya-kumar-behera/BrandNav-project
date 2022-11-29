import React from "react";
import image from "../image/Illustration 1.svg";
import serverImage from "../image/Group 1217.svg";
import userImage from "../image/Group 1216.svg";
import locationImage from "../image/Group 1215.svg";
import "../css/GetStarted.css";
const GetStarted = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="desc">
          <div className="desc-inn">
            <h1>
              Want anything to be easy with <span>LaslesVPN.</span>
            </h1>
          </div>
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features with us.
          </p>
          <div className="button">
            <button>Get Started</button>
          </div>
        </div>
        <div className="getstarted-image">
          <img src={image} width="100%" height="100%"></img>
        </div>
      </div>
      <div className="details">
        <div className="users box">
          <div className="detail-image">
            <img src={userImage}></img>
          </div>
          <div className="about-detail">
            <h3>90+</h3>
            <h5>Users</h5>
          </div>
        </div>
        <div className="locations box">
          <div className="detail-image">
            <img src={locationImage}></img>
          </div>
          <div className="about-detail">
            <h3>30+</h3>
            <h5>Locations</h5>
          </div>
        </div>
        <div className="servers box">
          <div className="detail-image">
            <img src={serverImage}></img>
          </div>
          <div className="about-detail">
            <h3>50+</h3>
            <h5>servers</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
