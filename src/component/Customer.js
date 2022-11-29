import React from "react";
import "../css/Customer.css";
import viezh from "../image/Ellipse 175.png";
import star from "../image/star.png";
import yessica from "../image/Ellipse 175 (1).png";
import kimYoung from "../image/Ellipse 175 (2).png";
import leftArrow from "../image/left-arrow.svg";
import rightArrow from "../image/right-arrow.svg";
const Customer = () => {
  return (
    <div className="customer-container">
      <div className="customer-header">
        <h1>Trusted By Thausands Of Happy Customer</h1>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="story-container">
        <div className="stories " id="story-active">
          <div className="story-heading">
            <div className="profile-image-details">
              <div className="profile-image">
                <img src={viezh} width="100%" height="100%"></img>
              </div>
              <div className="name-address">
                <div className="name">Viezh Robert</div>
                <div className="address">Warsaw,Poland</div>
              </div>
            </div>
            <div className="rating">
              <div className="rate">4.5</div>
              <div className="star">
                <img alt="star" src={star} width="100%" height="100%"></img>
              </div>
            </div>
          </div>
          <div className="review">
            <p>
              "Wow... I am very happy to use this VPN. It turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best."
            </p>
          </div>
        </div>
        <div className="stories">
          <div className="story-heading">
            <div className="profile-image-details">
              <div className="profile-image">
                <img src={yessica} width="100%" height="100%"></img>
              </div>
              <div className="name-address">
                <div className="name">Yessica Christy</div>
                <div className="address">Shanxi, China</div>
              </div>
            </div>
            <div className="rating">
              <div className="rate">4.5</div>
              <div className="star">
                <img alt="star" src={star} width="100%" height="100%"></img>
              </div>
            </div>
          </div>
          <div className="review">
            <p>
              "I like it because I like to travel far and still connect with
              high speed.."
            </p>
          </div>
        </div>
        <div className="stories" id="third-story">
          <div className="story-heading">
            <div className="profile-image-details">
              <div className="profile-image">
                <img src={kimYoung} width="100%" height="100%"></img>
              </div>
              <div className="name-address">
                <div className="name">Kim Young Jou</div>
                <div className="address">Seoul, South Korea</div>
              </div>
            </div>
            <div className="rating">
              <div className="rate">4.5</div>
              <div className="star">
                <img alt="star" src={star} width="100%" height="100%"></img>
              </div>
            </div>
          </div>
          <div className="review">
            <p>
              "This is very unusual for my business that currently requires a
              virtual private network that has high security."
            </p>
          </div>
        </div>
      </div>
      <div className="story-handler">
        <div className="dots">
          <button className="active"></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="arrows">
          <button>
            <img src={leftArrow} width="100%" height="100%"></img>
          </button>
          <button className="active">
            <img src={rightArrow} width="100%" height="100%"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
