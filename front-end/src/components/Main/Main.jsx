import React, { Component } from "react";
// import { Link } from "react-router-dom";
import CommentIcon from "@material-ui/icons/Comment";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./Main.css";
import { Card } from "@material-ui/core";
import Button from "react-bootstrap/Button";

class Main extends Component {
  render() {
    return (
      <div>
        <Card id="main-card-landing" className="main-card-landing">
          <div className="page-header header-filter" data-parallax="true">
            <div className="container">
              <div className="row">
                <div className="mr-auto ml-auto">
                  <h1 className="title text-center main">
                    Your Story Starts With Us
                  </h1>
                  <h4 className="text-center">
                    This is a website to find boxes that meet your requirements
                  </h4>
                  <Button
                    variant="danger"
                    href="https://www.youtube.com/watch?v=0IxlWno8VvA"
                    className="button-main"
                    target="_blank"
                  >
                    <i className="fa fa-play"></i> This is CrossFit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div id="text-central-main" className="main main-raised">
            <div className="container">
              <div className="section text-center">
                <div className="row">
                  <div className=" ml-auto mr-auto">
                    <h2 className="title">Differents type of filter</h2>
                    <h5 className="description">
                      You can search by filtering the boxes. If they let you
                      drop the bar. If they have classes for beginners. If they
                      are affiliates. For the material they have. If they have
                      classes for children
                    </h5>
                  </div>
                </div>
                <div className="features">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="info">
                        <div className="icon icon-info">
                          <CommentIcon />
                        </div>
                        <h4 className="info-title">Comment</h4>
                        <p>
                          You can comment the box, if you already have
                          experience
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="info">
                        <div className="icon icon-success">
                          <PeopleAltIcon />
                        </div>
                        <h4 className="info-title">Coaches</h4>
                        <p>You can see the official certifications they have</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="info">
                        <div className="icon icon-danger">
                          <ControlPointIcon />{" "}
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
        <div id="blur"></div>
      </div>
    );
  }
}

export default Main;
