import React from "react";
import DegreeInfo from "./DegreeInfo";
import "../styles.css";

const ProfileEducationCard = (props) => {

  const RenderDegrees = (AllDegrees) => {
     return AllDegrees.map((Degree)=>{
      return(
        <DegreeInfo DegreeInformation={Degree}/>
      )
    })
  }

  return (
    <div className="cardStyles container cardUpperDistance">
      <div className="row">
        <div className="col-md d-flex align-items-center cardHeading">
          <h4 className="profileHeadings">Education</h4>
        </div>
      </div>
      <div className="container">
        {RenderDegrees(props.degreeInfo)}
      </div>
    </div>
  );
};

export default ProfileEducationCard;
