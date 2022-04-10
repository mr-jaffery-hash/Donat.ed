import React from "react";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfileNameCard from "../components/ProfileNameCard";
import ProfileContactCard from "../components/ProfileContactCard";
import ProfileEducationCard from "../components/ProfileEducationCard";

const UserProfile = () => {
    return(
        <div className="background">
            <ProfileNavBar />
            <ProfileNameCard />
            <ProfileContactCard />
            <ProfileEducationCard />
        </div>
    )
}

export default UserProfile