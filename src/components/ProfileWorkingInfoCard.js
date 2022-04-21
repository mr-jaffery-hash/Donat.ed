import React from "react";
import JobInfo from "./JobInfo";
import "../styles.css";

const ProfileWorkingInfoCard = ({JobInf}) => {

  return (
    <div className="cardStyles container cardUpperDistance">
      <div className="row">
        <div className="col-md d-flex align-items-center cardHeading">
          <h4 className="profileHeadings">Working Information:</h4>
        </div>
      </div>
      <div className="container">
      <JobInfo JobI={JobInf}/>
      </div>
    </div>
  );
};

export default ProfileWorkingInfoCard;
