import React, { useState } from "react";
import EditProfileNavBar from "../components/EditProfileNavBar";
import EditProfileNameCard from "../components/EditProfileNameCard";
import EditProfileEducationCard from "../components/EditProfileEducationCard";
import ConnectCard from "../components/ConnectCard";
import EditProfileCurrentNeedCard from "../components/EditProfileCurrentNeedCard";
import EditProfileContactCard from "../components/EditProfileContactCard";
import "../styles.css";

const EditStudentProfile = () => {
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [name, setName] = useState("Mohsin Raza Jaffery");
   const [status, setStatus] = useState("Looking for donations");
   const [facebookAddress, setFacebookAddress] = useState("");
   const [twitterAddress, setTwitterAddress] = useState("");
   const [currentNeed, setCurrentNeed] = useState("");

  const degreeInfo = [
    {
      certificate: "HSSC",
      verfied: false,
      grade: "A+",
      year: "2019",
      institution: "Government College University",
      details:
        "I graduated from GCU, Lahore in march 1971. There i stayed for almost 2 years. I spent good time there.I graduated from GCU, Lahore in march 1971. There i stayed for almost 2 years. I spent good time there",
    },
    {
      certificate: "HSSC",
      verfied: false,
      grade: "A+",
      year: "2019",
      institution: "Government College University",
      details:
        "I graduated from GCU, Lahore in march 1971. There i stayed for almost 2 years. I spent good time there.I graduated from GCU, Lahore in march 1971. There i stayed for almost 2 years. I spent good time there",
    },
  ];

  const nameDeets = {
    name: "Syed Mohsin Raza Jaffery",
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
      <EditProfileNavBar />
      <EditProfileNameCard status={status} editstatus={setStatus} name={name} editname={setName} />
      <div className="container">
        <div className="container">
          <EditProfileContactCard contactInformation={contactInformation} />
          <EditProfileEducationCard degreeInfo={degreeInfo} />
          <div className="row cardLowerDistance">
            <div className="col">
              <ConnectCard />
            </div>
            <div className="col left-padding-0" style={{ display: "flex" }}>
              <EditProfileCurrentNeedCard need={Need} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentProfile;
