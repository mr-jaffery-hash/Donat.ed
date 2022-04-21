import React from "react";
import pic from "../images/logoblue-2.png";
import "../styles.css";

const EditProfileNameCard = ({ details }) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-3">
          <img src={pic} class="h-75 img-fluid avatar centerImage" alt="." />
        </div>
        <div className="col-sm-6">
          <div className="row">
            <h6 className="">
              <input
                placeholder="Profile Picture"
                type="file"
                className="form-control"
              />
            </h6>
          </div>
          <div className="row">
          <b>Name</b>
            <h1 className="profileName">
              <input type="text" className="form-control" />
            </h1>
          </div>
          <div className="row">
            <b>Status:</b>
            <h6 className="profileStatus">
              <input type="text" className="form-control" />
            </h6>
          </div>
        </div>
      </div>
      <div className="row justify-content-center"></div>
    </div>
  );
};

export default EditProfileNameCard;
