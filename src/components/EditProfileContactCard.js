import React from "react";
import "../styles.css";

const EditProfileContactCard = ({ contactInformation }) => {
  return (
    <div className="cardStyles container">
      <div className="row">
        <div className="col-md d-flex align-items-center cardHeading">
          <h4 className="profileHeadings">Contact Information</h4>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-1">
            <span className="cardFont">
              <b>Name</b>:
            </span>
          </div>
          <div className="col-md-5">
            <input className="form-control-sm editProfileInput" type="text" />
          </div>
          <div className="col-md-1">
            <span className="cardFont">
              <b>Email</b>:
            </span>
          </div>
          <div className="col-md-5">
            <input className="form-control-sm editProfileInput" type="text" />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-1">
            <span className="cardFont">
              <b>Address</b>:
            </span>
          </div>
          <div className="col-md-5">
            <input className="form-control-sm editProfileInput" type="text" />
          </div>
          <div className="col-md-1">
            <span className="cardFont">
              <b>Phone</b>:
            </span>
          </div>
          <div className="col-md-5">
            <input className="form-control-sm editProfileInput" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileContactCard;
