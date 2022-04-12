import React from "react";

const CurrentNeedCard = ({ need }) => {
  if (need) {
    return (
      <div className="cardStyles container cardUpperDistance cardLowerDistance">
        <div className="row">
          <div className="col">
            <h4 className="profileHeadings">Current Need</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">
          <span className="cardFont"><b>Amount RS</b>: {need.amount}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentNeedCard;
