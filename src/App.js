import React from "react";
import StudentProfilePage from "./pages/StudentProfilePage";
import DonorProfilePage from "./pages/DonorProfilePage";
import StudentFeed from "./pages/StudentFeed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditStudentProfile from "./pages/EditStudentProfilePage";
import EditDonorProfile from "./pages/EditDonorProfile";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <EditStudentProfile />
          </Route>
          <Route path="/studentfeed">
            <StudentFeed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
