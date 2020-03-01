// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  //componentWillReceiveProps
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <button
                className="button is-outlined"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>

          <div className="header">
            <img src="/images/Recurso.png" alt="" height="100" />
            <h2>
              Welcome {this.state.loggedInUser.username} -{" "}
              {this.state.loggedInUser.userType}
            </h2>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/signup">
                  <button className="button is-outlined">SignUp</button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="button is-outlined">Login</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
