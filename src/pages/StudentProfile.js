import React from "react";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfileNameCard from "../components/ProfileNameCard";
import ProfileContactCard from "../components/ProfileContactCard";
import ProfileEducationCard from "../components/ProfileEducationCard";
import ConnectCard from "../components/ConnectCard";
import CurrentNeedCard from "../components/CurrentNeedCard";
import '../styles.css'

const UserProfile = () => {
  const nameDeets = {
    name: "Mohsin Raza Jaffery",
    status: "Looking for donations",
  };
  const contactInformation = {
    name: "Mohsin Raza",
    email: "mohsinrazajaffery@gmail.com",
    address: "Link 1, DHA Main Boulevard, Lahore",
    phone: "03322832283",
  };
  const Need = {
    amount: 500000,
  };
  return (
    <div className="background">
      <ProfileNavBar />
      <ProfileNameCard details={nameDeets} />
      <div className="container">
        <div className="container">
          <ProfileContactCard contactInformation={contactInformation} />
          <ProfileEducationCard />
          <div className="row cardLowerDistance">
            <div className="col">
              <ConnectCard />
            </div>
            <div className="col left-padding-0" style={{display:'flex'}}>
             <CurrentNeedCard need={Need} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
