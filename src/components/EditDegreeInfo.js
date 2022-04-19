import React from "react";
import "../styles.css";

const EditDegreeInfo = ({ DegreeInformation }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-1">
          <span className="cardFont">
            <b>Degree</b>:
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" />
        </div>
        <div className="col-md-1">
          <span className="cardFont">
            <b>Grade</b>: 
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <span className="cardFont">
            <b>Year</b>:
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" />
        </div>
        <div className="col-md-1">
          <span className="cardFont">
            <b>Institution</b>: 
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" />
        </div>
      </div>
      <div className="row">
        {/* <div className="col-md-2"></div> */}
        <div className="col-md-12">
          <span className="cardFont">
            <b>Details</b>:<p className=""><input className="form-control editProfileInput" type="text" /></p>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default EditDegreeInfo;
