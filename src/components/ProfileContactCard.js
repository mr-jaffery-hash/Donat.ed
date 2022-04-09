import React from "react";
import "../styles.css"

const ProfileNameCard = () => {

    const contactInformation = {
        name: 'Mohsin Raza',
        email: 'mohsinrazajaffery@gmail.com',
        address: 'Link 1, DHA Main Boulevard, Lahore',
        phone: '03322832283'
    }

    return(
        <div className="cardStyles container">
            <div className="row">
                <div className="col">
                    <h4>
                        Contact Information
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-5">
                    <b>Phone</b>: {contactInformation.name}
                </div>
                <div className="col-md-5 text-truncate">
                    <b>Email</b>:  {contactInformation.email}
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-5 text-truncate">
                    <b>Address</b>: {contactInformation.address}
                </div>
                <div className="col-md-5">
                    <b>Phone:</b>: {contactInformation.phone}
                </div>
            </div>
        </div>
    )
}

export default ProfileNameCard