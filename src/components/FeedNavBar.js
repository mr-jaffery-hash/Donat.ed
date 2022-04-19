import React from "react";
import StudentProfilePage from '../pages/StudentProfilePage'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const FeedNavBar = () => {
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
                    <Link class="dropdown-item" to="/">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/">
          <StudentProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default FeedNavBar;
