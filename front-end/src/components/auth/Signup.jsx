// auth/Signup.js
import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import "./Signup.scss";
import { TextField } from "@material-ui/core";

import { Link } from "react-router-dom";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "", img: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const img = this.state.img;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service
      .signup(username, password, email, img)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          email: "",
          img: "",
          error: true
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
          email: email,
          img: img,
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
      <div className="Signup">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div className="card card-login">
                <form className="form" onSubmit={this.handleFormSubmit}>
                  <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">Signup</h4>
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
                  <div className="card-body">
                    <div className="input-group">
                      <TextField
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                      />
                    </div>
                    <div className="input-group">
                      <TextField
                        type="password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                      />
                    </div>
                    <div className="input-group">
                      <TextField
                        type="email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="footer text-center">
                    <input
                      type="submit"
                      value="Signup"
                      className="btn btn-secondary"
                    />
                  </div>
                  <Link className="change-signup" to="/login">
                    Login
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
