import React, { Component } from "react";
import getBoxDetails from "../../services/IndexService";
import "./BoxDetails.scss";
import Card from "react-bootstrap/Card";
import SimpleMap from "../Maps/Map";
import CardMaterial from "./CardMaterial/CardMaterial";
import CommentsContainerDetail from "./CommentsContainer/CommentsContainerDetail";
import CommentInput from "./CommentsContainer/CommentInput";
import IndexService from "../../services/IndexService";
import BasicInfoContainer from "./BasicInfo/BasicInfo";
import BasicInfoContainerCoach from "./BasicInfo/BasicInfoCoach";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/PacmanLoader";
import EuroIcon from "@material-ui/icons/Euro";
import ScheduleIcon from "@material-ui/icons/Schedule";
import InfoIcon from "@material-ui/icons/Info";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

const override = css`
  display: block;
  color: grey;
  size: 40;
  margin: 2;
  padding: 20%;
`;

class BoxDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { box: {} };
    this.services = new getBoxDetails();
    this.commentServices = new IndexService();
  }

  getBoxDetails = () => {
    this.services
      .getBoxDetails(this.props.match.params.id)
      .then(oneBox => {
        console.log(oneBox);
        this.setState({ box: oneBox });
      })
      .catch(err => console.log(err));
  };
  postComment = data => {
    const { userInSession } = this.props;
    const { id } = this.props.match.params;

    this.commentServices.postComment(data, userInSession, id).then(() => {
      this.getBoxDetails();
    });
  };

  componentDidMount = () => this.getBoxDetails();
  render() {
    if (this.state.box.boxDetails) {
      const { boxDetails } = this.state.box;
      const machinesArr = boxDetails.material.machines;
      console.log(machinesArr);
      const commentsObj = boxDetails.comments;
      const { userInSession } = this.props;
      const restArr = boxDetails.material.rest;
      return (
        <div className="BoxDetails">
          <div className="card card-nav-tabs">
            <div className="card-header card-header-primary">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <ul className="nav nav-tabs" data-tabs="tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#profile"
                        data-toggle="tab"
                      >
                        <i className="material-icons">house</i> Box
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#material"
                        data-toggle="tab"
                      >
                        <i className="material-icons">fitness_center</i>{" "}
                        Material
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#messages"
                        data-toggle="tab"
                      >
                        <i className="material-icons">chat</i> Comments
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link">{boxDetails.boxName}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body ">
              <div className="tab-content text-center">
                <div className="tab-pane active" id="profile">
                  <div className="row">
                    <Card id="card-box-details" className="col data">
                      <div className="map">
                        <SimpleMap pos={boxDetails.position} marker={true} />
                      </div>
                      <h4 className="schedule-title">
                        Schedule <ScheduleIcon />{" "}
                      </h4>
                      <div className="schedule">
                        <div className="schedule-child">
                          <div>
                            <h5>Monday-Friday</h5>
                            <small>
                              {boxDetails.schedule.mondayToFriday.start}
                            </small>
                            {"-"}
                            <small>
                              {boxDetails.schedule.mondayToFriday.end}
                            </small>
                          </div>
                        </div>
                        <div className="schedule-child">
                          <div>
                            <h5>Saturday</h5>
                            <small>{boxDetails.schedule.saturday.start}</small>
                            {"-"}
                            <small>{boxDetails.schedule.saturday.end}</small>
                          </div>
                          <div>
                            <h5>Sunday</h5>
                            <small>{boxDetails.schedule.sunday.start}</small>
                            {"-"}
                            <small>{boxDetails.schedule.sunday.end}</small>
                          </div>
                        </div>
                        <div id="prices" className="data-coaches">
                          <h3>
                            Prices <EuroIcon />
                          </h3>
                          <div>
                            <div>Drop-In: {boxDetails.prices.dropin} €</div>
                            <div>Full: {boxDetails.prices.fullMonth} €</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card id="card-box-details" className="col data">
                      <div className="mini-basic">
                        <h3>
                          Basic <InfoIcon />{" "}
                        </h3>
                        <BasicInfoContainer {...boxDetails} />
                      </div>
                      <div className="data-coaches">
                        <h3>
                          Coaches <AccessibilityNewIcon />{" "}
                        </h3>
                        <div>
                          <BasicInfoContainerCoach {...boxDetails} />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className="tab-pane" id="material">
                  <div className="mini-data row">
                    <div className="col">
                      <h3>Machines</h3>
                      {machinesArr.map(machine => (
                        <CardMaterial
                          key={machine.name}
                          {...machine}
                        ></CardMaterial>
                      ))}
                    </div>
                    <div className="col">
                      <h3>Material</h3>
                      {restArr.map(rest => (
                        <CardMaterial key={rest.name} {...rest} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="messages">
                  {userInSession && (
                    <CommentInput create={elm => this.postComment(elm)} />
                  )}
                  <CommentsContainerDetail
                    commentsArrDetails={commentsObj}
                  ></CommentsContainerDetail>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <DotLoader
          css={override}
          // size={150}
          // color={"#123abc"}
          // loading={this.state.loading}
        />
      );
    }
  }
}

export default BoxDetails;
