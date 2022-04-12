import React from "react";
import pic from "../images/logoblue-2.png"
import "../styles.css"

const ProfileNameCard = ({details}) => {

    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3">
                    <img src={pic} class="h-75 img-fluid avatar centerImage" alt="."/>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <h1 className="profileName">{details.name}</h1>
                    </div>
                    <div className="row">
                        <h6 className="profileStatus">{details.status}</h6>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                
            </div>
        </div>
    )
}

export default ProfileNameCard