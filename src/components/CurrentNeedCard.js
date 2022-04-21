import React from "react";

const CurrentNeedCard = (props) => {
  if (props.status!=="donor") {
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
          <span className="cardFont"><b>Amount RS</b>: {props.donation.amount}</span>
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
            <h4 className="profileHeadings">Can Donate</h4>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-5">
          <span className="cardFont"><b>Amount RS</b>: {props.donation.amount}</span>
          </div>
        </div>
      </div>)
  }
};

export default CurrentNeedCard;
