import React, { useState } from "react";
import EditProfileNavBar from "../components/EditProfileNavBar";
import EditProfileNameCard from "../components/EditProfileNameCard";
import EditProfileJobCard from "../components/EditProfileJobCard";
import ConnectCard from "../components/ConnectCard";
import EditProfileCurrentNeedCard from "../components/EditProfileCurrentNeedCard";
import EditProfileContactCard from "../components/EditProfileContactCard";
import "../styles.css";

const EditStudentProfile = () => {
  const [phone, setPhone] = useState("03002221111");
  const [email, setEmail] = useState("hussainabbas2000@gmail.com");
  const [address, setAddress] = useState("1 A1, Cantt, Lahore");
  const [name, setName] = useState("Hussain Abbas");
  const [facebookAddress, setFacebookAddress] = useState("");
  const [twitterAddress, setTwitterAddress] = useState("");
  const [amount, setAmount] = useState("200000");
  const [status, setStatus] = useState('Can Donate')

 
const nameDeets = {
    name: "Hussain Abbas",
    status: "Can Donate",
  };
  const JobInfo = {
      DayJob: "Lawyer",
      verfied: false,
      year: "1989",
      MonthlyIncome:1000000,
      Graduatedinstitute: "Lums",
      details:
        "I graduated from Lums, Lahore in march 1989. There i stayed for 4 years. I have been practicing law since then."
    };
  const contactInformation = {
    name: "Hussain Abbas",
    email: "hussainabbas2000@gmail.com",
    address: "1 A1, Cantt, Lahore",
    phone: "03002221111",
  };
  const CanDonate = {
    amount: 200000,
  };
  return (
    <div className="background">
      <EditProfileNavBar />
      <EditProfileNameCard  name={name} status={status}  editsttatus={setStatus}   />
      <div className="container">
        <div className="container">
          <EditProfileContactCard  name={name} phone={phone} email={email} address={address} setName={setName} setEmail={setEmail} setPhone={setPhone} setAddress={setAddress}/>
          <EditProfileJobCard/>
          <div className="row cardLowerDistance">
            <div className="col">
              <ConnectCard />
            </div>
            <div className="col left-padding-0" style={{ display: "flex" }}>
              <EditProfileCurrentNeedCard need={amount} setNeed={setAmount} status="donor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentProfile;
