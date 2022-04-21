import React from "react";
import EditJobInfo from "./EditJobInfo";
import "../styles.css";

const EditProfileEducationCard = () => {

  return (
    <div className="cardStyles container cardUpperDistance">
      <div className="row">
        <div className="col-md d-flex align-items-center cardHeading">
          <h4 className="profileHeadings">Job</h4>
        </div>
      </div>
      <div className="container">
        <EditJobInfo/>
      </div>
    </div>
  );
};

export default EditProfileEducationCard;
