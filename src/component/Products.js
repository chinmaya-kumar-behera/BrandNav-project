import React from "react";
import "../css/Products.css";
import pic from "../image/Illustration 2.svg";
import tik from "../image/Group 1120.svg";
const Products = () => {
  return (
    <div className="product-container">
      <div className="image">
        <img src={pic} width="100%" height="100%"></img>
      </div>
      <div className="product-details">
        <div className="heading">
          <p>We Provide Many Features You Can Use</p>
        </div>
        <div className="product-desc">
          <p>
            You can explore the features the we provide with fun and have their
            own functions each feature.
          </p>
        </div>

        <div className="products-list">
          <div className="lists">
            <img src={tik}></img>
            <p>Powerful online protection.</p>
          </div>

          <div className="lists">
            <img src={tik}></img>
            <p>Internet without borders.</p>
          </div>
          <div className="lists">
            <img src={tik}></img>
            <p>Supercharged VPN</p>
          </div>
          <div className="lists">
            <img src={tik}></img>
            <p>No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
