import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./Main.sass";
import { Card, Link } from "@material-ui/core";

class Main extends Component {
  render() {
    return (
      <Card>
        <div className="page-header header-filter" data-parallax="true">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title">Your Story Starts With Us.</h1>
                <h4>
                  This is a website to find boxes that meet your requirements
                </h4>
                <Link
                  href="https://www.youtube.com/watch?v=0IxlWno8VvA"
                  className="btn btn-danger btn-raised btn-lg"
                  target="_blank"
                >
                  <i className="fa fa-play"></i> This is CrossFit
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h2 className="title">Different type of filter</h2>
                  <h5 className="description">
                    You can search by filtering the boxes. If they let you drop
                    the bar. If they have classes for beginners. If they are
                    affiliates. For the material they have. If they have classes
                    for children
                  </h5>
                </div>
              </div>
              <div className="features">
                <div className="row">
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className="material-icons">chat</i>
                      </div>
                      <h4 className="info-title">Comment</h4>
                      <p>
                        You can comment the box, if you already have experience
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="material-icons">verified_user</i>
                      </div>
                      <h4 className="info-title">Coaches</h4>
                      <p>You can see the official certifications they have</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="material-icons">fingerprint</i>
                      </div>
                      <h4 className="info-title">More info comming</h4>
                      <p>
                        You cand send an email to include the information you
                        think is relevant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Main;
