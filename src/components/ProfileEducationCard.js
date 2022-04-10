import React from "react";
import DegreeInfo from "./DegreeInfo";
import "../styles.css"

const ProfileEducationCard = () => {

    const contactInformation = {
        name: 'Mohsin Raza',
        email: 'mohsinrazajaffery@gmail.com',
        address: 'Link 1, DHA Main Boulevard, Lahore',
        phone: '03322832283'
    }

    const degreeInfo = {
        certificate: 'HSSC',
        verfied: false,
        grade: 'A+',
        year: '2019',
        institution: 'Government College University',
        details: 'I graduated from GCU, Lahore in march 1971. There i stayed for almost 2 years. I spent good time there.I graduated from GCU, Lahore in march 1971. There i stayed for almost 2 years. I spent good time there'
    }

    return(
        <div className="cardStyles container">
            <div className="row">
                <div className="col">
                    <h4 className="profileHeadings">
                        Education
                    </h4>
                </div>
            </div>
            <DegreeInfo DegreeInformation={degreeInfo}/>
            <DegreeInfo DegreeInformation={degreeInfo}/>
        </div>
    )
}

export default ProfileEducationCard