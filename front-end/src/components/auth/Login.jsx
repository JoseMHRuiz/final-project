// auth/Signup.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { Link } from "react-router-dom";
import "./Login.scss";
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
      <div className="Login">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div className="card card-login">
                <form className="form" onSubmit={this.handleFormSubmit}>
                  <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">Login</h4>
                    <div className="social-line">
                      <a href="#pablo" className="btn btn-just-icon btn-link">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-link">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-link">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div>
                  <p className="description text-center">Or Be classNameical</p>
                  <div className="card-body">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">face</i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">lock_outline</i>
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="footer text-center">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-link btn-wd btn-lg"
                    />
                  </div>
                  <Link to="/SignUp">
                    <p>SignUp</p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h1> {this.state.error ? "Error" : ""} </h1>{" "}
      </div>
    );
  }
}

export default Login;
