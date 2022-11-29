import React from "react";
import "../css/ChoosePlan.css";
import planImage from "../image/Free.svg";
import tick from "../image/Group 1120.svg";
const ChoosePlan = () => {
  return (
    <div className="plan-container">
      <div className="plan-header">
        <h1>Choose Your Plan</h1>
        <p>
          Let's choose the package the is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="plan-list">
        <div className="plan-box">
          <img src={planImage}></img>
          <h2>Free Plan</h2>
          <div className="plan-desc-container">
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Unlimited Bandwidth</span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Encrypted Connection</span>
            </div>

            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span> Works On All Devices</span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span> No Traffic Logs</span>
            </div>
          </div>
          <div className="price-detail">
            <h1>Free</h1>
            <div className="price-select-btn">
              <button>select</button>
            </div>
          </div>
        </div>
        <div className="plan-box">
          <img src={planImage}></img>
          <h2>Standard Plan</h2>
          <div className="plan-desc-container">
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Unlimited Bandwidth</span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Encrypted Connection</span>
            </div>

            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span> Yes Traffic Logs</span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Works On All Devices</span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span> Connect Anywhere</span>
            </div>
          </div>
          <div className="price-detail">
            <h1>
              $9<span>/mo</span>
            </h1>
            <div className="price-select-btn">
              <button>select</button>
            </div>
          </div>
        </div>
        <div className="plan-box">
          <img src={planImage}></img>
          <h2>Premium Plan</h2>
          <div className="plan-desc-container">
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Unlimited Bandwidth</span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Encrypted Connection</span>
            </div>

            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Yes Traffic Logs </span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Works On All Devices </span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Connect Anywhere </span>
            </div>
            <div className="plan-desc">
              <div className="tick-image">
                <img src={tick}></img>
              </div>
              <span>Get New Features</span>
            </div>
          </div>
          <div className="price-detail">
            <h1>
              $12<span>/mo</span>
            </h1>
            <div className="price-select-btn">
              <button>select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
