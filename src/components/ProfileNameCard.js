import React from "react";
import pic from "../images/logoblue-2.png"
import "../styles.css"

const ProfileNameCard = () => {
    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3">
                    <img src={pic} class="h-75 img-fluid avatar centerImage" alt="."/>
                </div>
                <div className="col-sm-6">
                    <h1 className="centerText profileName">Mohsin Raza Jaffery</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                
            </div>
        </div>
    )
}

export default ProfileNameCard