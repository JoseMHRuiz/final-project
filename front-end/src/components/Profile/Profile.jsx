import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./Profile.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CommentsContainer from "./CommentsContainer";
const Profile = props => {
  const { userInSession } = props;
  console.log(userInSession);

  return (
    <Card className="Profile main main-raised">
      <div className="profile-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="profile">
                <div className="avatar col-md-6 ml-auto mr-auto">
                  <img
                    alt="name"
                    src={userInSession.img}
                    className="rounded-circle"
                  />
                </div>
                <div className="name">
                  <h3 className="title">{userInSession.username}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="description text-center">
            <p>{userInSession.email}</p>
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="profile-tabs">
                <ul
                  className="nav nav-pills nav-pills-icons justify-content-center"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Button
                      className="nav-link active"
                      href="#box"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className="material-icons">camera</i> Box
                    </Button>
                  </li>

                  <li className="nav-item">
                    <Button
                      className="nav-link"
                      href="#comments"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className="material-icons">favorite</i> Comments
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content tab-space">
            <div className="tab-pane active text-center gallery" id="box">
              <div className="row">
                <div className="col-md">Box</div>
              </div>
            </div>
            <div className="tab-pane text-center gallery" id="comments">
              <div className="row">
                <div className="col-md">
                  Comments
                  <CommentsContainer {...userInSession} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
