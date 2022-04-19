import React from "react";
import EditDegreeInfo from "./EditDegreeInfo";
import "../styles.css";

const EditProfileEducationCard = (props) => {

  const RenderDegrees = (AllDegrees) => {
     return AllDegrees.map((Degree)=>{
      return(
        <EditDegreeInfo DegreeInformation={Degree}/>
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

export default EditProfileEducationCard;
