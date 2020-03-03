// auth/Signup.js
import React, { Component } from "react";
import AuthService from "./AuthService";

import { Link } from "react-router-dom";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user);
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
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div className="card card-login">
                <form className="form" onSubmit={this.handleFormSubmit}>
                  <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">SignUp</h4>
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
                      value="Signup"
                      className="btn btn-primary btn-link btn-wd btn-lg"
                    />
                  </div>
                  <Link to="/Login">
                    <p>Login</p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default Signup;
