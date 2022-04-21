import React from "react";
import '../styles.css'

const JobInfo = ({JobI}) => {
    return(
        <div>
            <div className="row">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-6 text-truncate">
                    <span className="cardFont"><b>Job</b>: {JobI.DayJob}</span>
                </div>
                <div className="col-md-6 text-truncate">
                <span className="cardFont"><b>MonthlyIncome</b>:  {JobI.MonthlyIncome}</span>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-6 text-truncate">
                <span className="cardFont">   <b>Institution</b>: {JobI.Graduatedinstitute}</span>
                </div>
                <div className="col-md-6 text-truncate">
                <span className="cardFont"> <b>Year</b>: {JobI.year}</span>
                </div>               
            </div>
            <div className="row">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-12">
                <span className="cardFont"> <b>Details</b>:
                    <p className="">
                        {JobI.details}
                    </p></span>
                </div> 
            </div>
            <hr/>
        </div>
    )
}

export default JobInfo;