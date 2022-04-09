import React from "react";
import '../styles.css'

const DegreeInfo = ({DegreeInformation}) => {
    return(
        <div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-5 text-truncate">
                    <b>Degree</b>: {DegreeInformation.certificate}
                </div>
                <div className="col-md-5 text-truncate">
                    <b>Grade</b>:  {DegreeInformation.grade}
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-5 text-truncate">
                    <b>Year</b>: {DegreeInformation.year}
                </div>
                <div className="col-md-5 text-truncate">
                    <b>Institution</b>: {DegreeInformation.institution}
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-10 text-truncate">
                    <b>Details</b>:
                    <p className="text-truncate">
                        {DegreeInformation.details}
                    </p>
                </div> 
            </div>
            <hr/>
        </div>
    )
}

export default DegreeInfo