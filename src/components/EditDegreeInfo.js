import React from "react";
import "../styles.css";

const EditDegreeInfo = ({ degree, setDegree, grade, setGrade, year, setYear, inst, setInst, details, setDetails }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-1">
          <span className="cardFont">
            <b>Degree</b>:
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" value={degree} onChange={(e)=>{setDegree(e.target.value)}}/>
        </div>
        <div className="col-md-1">
          <span className="cardFont">
            <b>Grade</b>: 
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" value={grade} onChange={(e)=>{setGrade(e.target.value)}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <span className="cardFont">
            <b>Year</b>:
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" value={year} onChange={(e)=>{setYear(e.target.value)}}/>
        </div>
        <div className="col-md-1">
          <span className="cardFont">
            <b>Institution</b>: 
          </span>
        </div>
        <div className="col-md-5">
          <input className="form-control-sm editProfileInput" type="text" value={inst} onChange={(e)=>{setInst(e.target.value)}}/>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-md-2"></div> */}
        <div className="col-md-12">
          <span className="cardFont">
            <b>Details</b>:<p className=""><input className="form-control editProfileInput" type="text" value={details} onChange={(e)=>{setDetails(e.target.value)}}/></p>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <input className="form-control editProfileInput" type= 'file'/>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">
            Submit
          </button>        
        </div>
      </div>
      <hr />
    </div>
  );
};

export default EditDegreeInfo;
