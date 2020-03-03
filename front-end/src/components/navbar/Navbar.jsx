// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import AuthService from "../auth/AuthService";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
// import "./adminlte.min.css";

class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loggedInUser: null };
  //   this.service = new AuthService();
  // }
  // //componentWillReceiveProps
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  // }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    console.log(this.props.userInSession);
    if (this.props.userInSession) {
      return (
        <nav
          class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
          color-on-scroll="100"
          id="sectionsNav"
        >
          <div class="container">
            <div class="navbar-translate">
              <div class="navbar-brand">SocialBox </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="dropdown nav-item">
                  <a
                    href="#"
                    class="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                  >
                    <i class="material-icons">apps</i>{" "}
                    {this.props.userInSession.username}
                  </a>
                  <div class="dropdown-menu dropdown-with-icons">
                    <a onClick={this.handleLogout} class="dropdown-item">
                      <i class="material-icons">layers</i> Logout
                    </a>
                    <Link to="/profile" class="dropdown-item">
                      <i class="material-icons">content_paste</i> Profile
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
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="material-icons">apps</i> Components
                  </a>
                  <div className="dropdown-menu dropdown-with-icons">
                    <a href="../index.html" className="dropdown-item">
                      <i className="material-icons">layers</i> All Components
                    </a>
                    <a
                      href="https://demos.creative-tim.com/material-kit/docs/2.1/getting-started/introduction.html"
                      className="dropdown-item"
                    >
                      <i className="material-icons">content_paste</i>{" "}
                      Documentation
                    </a>
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
}

export default Navbar;
