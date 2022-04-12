import React from "react";
import '../styles.css'

const DegreeInfo = ({DegreeInformation}) => {
    return(
        <div>
            <div className="row">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-6 text-truncate">
                    <span className="cardFont"><b>Degree</b>: {DegreeInformation.certificate}</span>
                </div>
                <div className="col-md-6 text-truncate">
                <span className="cardFont"><b>Grade</b>:  {DegreeInformation.grade}</span>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-6 text-truncate">
                <span className="cardFont"> <b>Year</b>: {DegreeInformation.year}</span>
                </div>
                <div className="col-md-6 text-truncate">
                <span className="cardFont">   <b>Institution</b>: {DegreeInformation.institution}</span>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-12">
                <span className="cardFont"> <b>Details</b>:
                    <p className="">
                        {DegreeInformation.details}
                    </p></span>
                </div> 
            </div>
            <hr/>
        </div>
    )
}

export default DegreeInfo