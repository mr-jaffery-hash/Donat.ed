import React from "react";
import StudentProfilePage from "./pages/StudentProfilePage";
import DonorProfilePage from "./pages/DonorProfilePage";
import StudentFeed from "./pages/StudentFeed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditStudentProfile from "./pages/EditStudentProfilePage";
import EditDonorProfile from "./pages/EditDonorProfile";
import MainPage from "./pages/MainPage";
import { Login } from "./pages/Login";
const App = () => {
  return (
      <Router>
        <Switch>
          <Route  path="/">
            <StudentFeed />
          </Route>
          <Route path="/studentfeed">
            <StudentFeed />
          </Route>
          <Route exact path="/login" component={Login}>
            <Login />
          </Route>
        </Switch>
      </Router>
  );
};

export default App;
