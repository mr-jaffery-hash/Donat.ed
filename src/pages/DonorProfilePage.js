import React from "react";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfileNameCard from "../components/ProfileNameCard";
import ProfileContactCard from "../components/ProfileContactCard";
import ProfileWorkingInfoCard from "../components/ProfileWorkingInfoCard";
import ConnectCard from "../components/ConnectCard";
import CurrentNeedCard from "../components/CurrentNeedCard";
import '../styles.css'
import {Link} from "react-router-dom";
const DonorProfilePage = () => {
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
          <ProfileNavBar />
          <ProfileNameCard details={nameDeets} />
          <Link to="/donorprofileedit">
          <center>
            <p><strong>Edit Profile</strong></p>
          </center>
          </Link>
          <div className="container">
            <div className="container">
              <ProfileContactCard contactInformation={contactInformation} />
              <ProfileWorkingInfoCard JobInf={JobInfo} />
              <div className="row cardLowerDistance">
                <div className="col">
                  <ConnectCard />
                </div>
                <div className="col left-padding-0" style={{display:'flex'}}>
                <CurrentNeedCard donation={CanDonate} status={"donor"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default DonorProfilePage