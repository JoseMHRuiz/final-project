// navbar/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  const handleLogout = e => {
    props.logout();
  };
  const { userInSession } = props;
  if (userInSession) {
    return (
      <nav
        className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
        color-on-scroll="100"
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <div className="navbar-brand">SocialBox </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown nav-item">
                <div
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">apps</i>{" "}
                  {userInSession.username}
                </div>
                <div className="dropdown-menu dropdown-with-icons">
                  <span onClick={handleLogout} className="dropdown-item">
                    <i className="material-icons">layers</i> Logout
                  </span>
                  <Link to="/profile" className="dropdown-item">
                    <i className="material-icons">content_paste</i> Profile
                  </Link>
                </div>
              </li>
              <Link className="nav-item" to="/home">
                <div className="nav-link">Home</div>
              </Link>
              <Link className="nav-item" to="/main">
                <div className="nav-link">Main</div>
              </Link>
              <Link className="nav-item" to="/">
                <div className="nav-link">Landing</div>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
        color-on-scroll="100"
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <div className="navbar-brand">SocialBox </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown nav-item">
                <span
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">apps</i> Components
                </span>
                <div className="dropdown-menu dropdown-with-icons">
                  <span href="../index.html" className="dropdown-item">
                    <i className="material-icons">layers</i> All Components
                  </span>
                  <span
                    href="https://demos.creative-tim.com/material-kit/docs/2.1/getting-started/introduction.html"
                    className="dropdown-item"
                  >
                    <i className="material-icons">content_paste</i>{" "}
                    Documentation
                  </span>
                </div>
              </li>
              <Link className="nav-item default" to="/home">
                <div className="nav-link">Home</div>
              </Link>
              <Link className="nav-item" to="/main">
                <div className="nav-link">Main</div>
              </Link>
              <Link className="nav-item" to="/">
                <div className="nav-link">Landing</div>
              </Link>
              <Link className="nav-item" to="/signup">
                <div className="nav-link">SignUp</div>
              </Link>
              <Link className="nav-item" to="/login">
                <div className="nav-link">Login</div>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
