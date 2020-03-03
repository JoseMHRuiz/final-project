import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <section className="hero">
          <div className="hero-head"></div>

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
