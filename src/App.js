import React from "react";
import StudentProfilePage from "./pages/StudentProfilePage";
import StudentFeed from "./pages/StudentFeed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditStudentProfile from "./pages/EditStudentProfilePage";

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
