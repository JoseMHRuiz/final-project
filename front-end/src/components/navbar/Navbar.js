// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import AuthService from "../auth/AuthService";

import "./Navbar.css";

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
        <nav className="nav-style">
          <nav className="navbar is-primary">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">adam bray</div>
                <span className="navbar-burger burger" data-target="navMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navMenu" className="navbar-menu">
                <div className="navbar-start">
                  <Link className="navbar-item" to="/home">
                    <div>Home</div>
                  </Link>
                  <Link className="navbar-item" to="/">
                    <div>Landing</div>
                  </Link>
                  <Link className="navbar-item" to="/">
                    <div>Forum</div>
                  </Link>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <p
                      className="button is-white is-outlined"
                      onClick={this.handleLogout}
                    >
                      <span>Logout</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="navbar is-primary">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">adam bray</div>
                <span className="navbar-burger burger" data-target="navMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navMenu" className="navbar-menu">
                <div className="navbar-start">
                  <Link className="navbar-item" to="/home">
                    <div>Home</div>
                  </Link>
                  <Link className="navbar-item" to="/">
                    <div>Landing</div>
                  </Link>
                  <Link className="navbar-item" to="/">
                    <div>Forum</div>
                  </Link>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <Link to="/login">
                      <p className="button is-white is-outlined">
                        <span className="icon">
                          <i className="fas fa-sign-in-alt"></i>{" "}
                        </span>
                        <span>Login</span>
                      </p>
                    </Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/signup">
                      <p className="button is-white is-outlined">
                        <span className="icon">
                          <i className="fas fa-user-plus"></i>
                        </span>
                        <span>SignUp</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav className="nav-style"></nav>
        </div>
      );
    }
  }
}

export default Navbar;
