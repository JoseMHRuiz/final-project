// auth/Signup.js
import React, { Component } from "react";
import AuthService from "./AuthService";
import "./Signup.css";
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
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-black">Signup</h3>
                <hr className="login-hr" />
                <p className="subtitle has-text-black">
                  Please signup to proceed.
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
                          autofocus=""
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
                      Signup{" "}
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
                <p className="has-text-grey">
                  <Link to="/login">
                    <p>Login</p>
                  </Link>
                  {/* &nbsp;·&nbsp; */}
                  {/* <a href="../">Forgot Password</a> &nbsp;·&nbsp; */}
                  {/* <a href="../">Need Help?</a> */}
                </p>
              </div>
            </div>
          </div>
        </section>
        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default Signup;
