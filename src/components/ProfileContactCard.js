import React from "react";
import "../styles.css";

const ProfileNameCard = ({ contactInformation }) => {
  return (
    <div className="cardStyles container">
      <div className="row">
        <div className="col">
          <h4 className="profileHeadings">Contact Information</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-5">
          <span className="cardFont">
            <b>Phone</b>: {contactInformation.name}
          </span>
        </div>
        <div className="col-md-5 text-truncate">
          <span className="cardFont">
            <b>Email</b>: {contactInformation.email}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-5 text-truncate">
          <span className="cardFont">
            <b>Address</b>: {contactInformation.address}
          </span>
        </div>
        <div className="col-md-5">
          <span className="cardFont">
            <b>Phone:</b>: {contactInformation.phone}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileNameCard;
