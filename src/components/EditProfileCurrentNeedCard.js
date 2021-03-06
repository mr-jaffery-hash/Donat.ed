import React from "react";

const EditProfileCurrentNeedCard = ({ status, need, setNeed}) => {
  if (status!=="donor") {
    return (
      <div className="cardStyles container cardUpperDistance">
        <div className="row">
          <div className="col-md d-flex align-items-center cardHeading">
            <h4 className="profileHeadings">Current Need</h4>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-5">
          <span className="cardFont"><b>Amount RS</b>: 
          </span>
          <input type='text' className="form-control-sm"  value={need} onChange={(e)=>{setNeed(e.target.value)}}/>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="cardStyles container cardUpperDistance">
        <div className="row">
          <div className="col-md d-flex align-items-center cardHeading">
            <h4 className="profileHeadings">Donation Limit:</h4>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-5">
          <span className="cardFont"><b>Amount RS</b>: 
          </span>
          <input value={need}   type='text' className="form-control-sm" onChange={(e)=>{setNeed(e.target.value)}}/>
          </div>
        </div>
      </div>
    );
  }

};

export default EditProfileCurrentNeedCard;
