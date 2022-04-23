import React from "react";
import StudentFeed from "../pages/StudentFeed";
import DonarFeed from '../pages/DonorFeed'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainPageNavBar = () => {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            donat.ed
          </a>
          <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropstart">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to='/signup'>
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/studentfeed">
                      News Feed
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/studentfeed">
          <StudentFeed />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainPageNavBar
