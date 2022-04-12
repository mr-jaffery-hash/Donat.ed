import React from "react";
import StudentProfile from "./pages/StudentProfile";
import StudentFeed from "./pages/StudentFeed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/">
            <StudentProfile />
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
