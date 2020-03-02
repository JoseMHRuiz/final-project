// auth/Signup.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AuthService from "./AuthService";
import { Link } from "react-router-dom";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-black">Login</h3>
                <hr className="login-hr" />
                <p className="subtitle has-text-black">
                  Please login to proceed.
                </p>
                <div className="box">
                  <figure className="avatar">
                    <img src="https://placehold.it/128x128" alt="" />
                  </figure>
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Your User"
                          name="username"
                          value={this.state.username}
                          onChange={e => this.handleChange(e)}
                          autoFocus=""
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={e => this.handleChange(e)}
                          placeholder="Your Password"
                        />
                      </div>
                    </div>
                    {/* <div className="field">
                      <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </div> */}
                    <button
                      className="button is-block is-info is-large is-fullwidth"
                      type="submit"
                      value="Login"
                    >
                      Login <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
                <div className="has-text-grey">
                  <Link to="/signup">
                    <p>Sign Up</p>
                  </Link>
                  {/* &nbsp;·&nbsp; */}
                  {/* <a href="../">Forgot Password</a> &nbsp;·&nbsp; */}
                  {/* <a href="../">Need Help?</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1> {this.state.error ? "Error" : ""} </h1>{" "}
      </div>
    );
  }
}

export default Login;
