import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./Profile.css";

class Profile extends Component {
  render() {
    const { userInSession } = this.props;

    return (
      <div className="Profile main main-raised">
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
                      <a
                        className="nav-link active"
                        href="#studio"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">camera</i> Studio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#works"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">palette</i> Work
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#favorite"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">favorite</i> Favorite
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content tab-space">
              <div className="tab-pane active text-center gallery" id="studio">
                <div className="row">
                  <div className="col-md">
                    <img
                      alt="name"
                      src="/assets/img/examples/studio-1.jpg"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane text-center gallery" id="works">
                <div className="row">
                  <div className="col-md">
                    <img
                      alt="name"
                      src="/assets/img/examples/olu-eletu.jpg"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane text-center gallery" id="favorite">
                <div className="row">
                  <div className="col-md">
                    <img
                      alt="name"
                      src="/assets/img/examples/mariya-georgieva.jpg"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
