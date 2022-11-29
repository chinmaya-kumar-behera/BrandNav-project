import React from "react";
import "../css/CompanyNetwork.css";
import globe from "../image/Huge Global.svg";
import netflix from "../image/Mask Group.svg";
import reddit from "../image/Mask Group (1).svg";
import amazon from "../image/Mask Group (2).svg";
import discord from "../image/Mask Group (3).svg";
import spotify from "../image/Mask Group (4).svg";

const CompanyNetwork = () => {
  return (
    <div className="network-container">
      <div className="network-header">
        <h1>Huge Global Network Of Fast VPN</h1>
        <p>
          See <span>LaslesVPN</span> everywhere to make is easier for you when
          you move locations.
        </p>
      </div>
      <div className="globe-image">
        <img src={globe} width="100%"></img>
      </div>
      <div className="companies-link-to">
        <div className="companies-link">
          <img src={netflix} width="100%" height="100%"></img>
        </div>
        <div className="companies-link">
          <img src={reddit} width="100%" height="100%"></img>
        </div>
        <div className="companies-link">
          <img src={amazon} width="100%" height="100%"></img>
        </div>
        <div className="companies-link">
          <img src={discord} width="100%" height="100%"></img>
        </div>
        <div className="companies-link">
          <img src={spotify} width="100%" height="100%"></img>
        </div>
      </div>
    </div>
  );
};

export default CompanyNetwork;
