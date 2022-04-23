import React from "react";
import StudentProfilePage from "./pages/StudentProfilePage";
import DonorProfilePage from "./pages/DonorProfilePage";
import StudentFeed from "./pages/StudentFeed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditStudentProfile from "./pages/EditStudentProfilePage";
import EditDonorProfile from "./pages/EditDonorProfile";
import MainPage from "./pages/MainPage";
import { Login } from "./pages/login";
import ForgetPassword from "./pages/ForgetPassword";
import ForgetPassword2 from "./pages/ForgetPassword2";
import ForgetPassword3 from "./pages/ForgetPassword3";
import DonorFeed from "./pages/DonorFeed";
const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/">

        <MainPage />

      </Route>
      <Route exact path="/studentlogin">
        <Login person="student"/>
      </Route>
      <Route exact path="/donorlogin">
        <Login person="donor"/>
      </Route>
      <Route exact path="/donorfeed">
        <DonorFeed/>
      </Route>
      <Route exact path="/studentfeed">
        <StudentFeed/>
      </Route>
      <Route exact path="/donorprofile">
        <DonorProfilePage/>
      </Route>
      <Route exact path="/studentprofile">
        <StudentProfilePage/>
      </Route>
      <Route exact path="/studentprofileedit">
        <EditStudentProfile/>
      </Route>
      <Route exact path="/donorprofileedit">
        <EditDonorProfile/>
      </Route>
      <Route exact path="/forgetpassword">
        <ForgetPassword/>
      </Route>
      <Route exact path="/forgetpassword2">
        <ForgetPassword2/>
      </Route>
      <Route exact path="/forgetpassword3">
        <ForgetPassword3/>
      </Route>
    </Switch>
  </Router>
  );
};

export default App;
