import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <section className="hero is-info is-fullheight">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <p className="navbar-item">
                    <img src="/images/Recurso.png" alt="Logo" />
                  </p>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenu"
                  >
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end">
                    <span className="navbar-item">
                      <Link to="/login">
                        <p className="button is-white is-outlined">
                          <span className="icon">
                            <i className="fas fa-sign-in-alt"></i>{" "}
                          </span>
                          <span>Login</span>
                        </p>
                      </Link>
                    </span>
                    <span className="navbar-item">
                      <Link to="/signup">
                        <p className="button is-white is-outlined">
                          <span className="icon">
                            <i className="fas fa-user-plus"></i>
                          </span>
                          <span>SignUp</span>
                        </p>
                      </Link>
                    </span>
                    <span className="navbar-item"></span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-6 is-offset-3">
                <h1 className="title">Coming Soon</h1>
                <h2 className="subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem saepe illum repellendus, dolores doloremque alias
                  quas? Dicta ipsa, sapiente quo id quibusdam debitis quis ipsum
                  minus ratione, iure excepturi maiores?
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
