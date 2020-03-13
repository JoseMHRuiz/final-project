import React from "react";
import "./Profile.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import CommentsContainer from "./CommentsContainer";
import BoxContainerProf from "./CardCommentProf/BoxContainerProf";

const Profile = props => {
  const { userInSession } = props;

  return (
    userInSession && (
      <Card id="profile-card" className="profile main main-raised">
        <div className="profile-content">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto">
                <div className="profile">
                  <div className="ml-auto mr-auto">
                    <Image
                      id="img-profile"
                      alt="name"
                      src={userInSession.img}
                      fluid
                    />
                  </div>
                  <div className="name text-center">
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
                        variant="secondary"
                        href="#box"
                        role="tab"
                        data-toggle="tab"
                      >
                        {" "}
                        Favorites
                      </Button>
                    </li>

                    <li className="nav-item">
                      <Button
                        className="nav-link"
                        variant="secondary"
                        href="#comments"
                        role="tab"
                        data-toggle="tab"
                      >
                        {" "}
                        Comments
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
                  <BoxContainerProf {...userInSession} />
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
    )
  );
};

export default Profile;
