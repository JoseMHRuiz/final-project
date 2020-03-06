import React, { Component } from "react";
// import { Link } from "react-router-dom";
import getBoxDetails from "../../services/IndexService";
// import { Link } from "react-router-dom";
import "./BoxDetails.scss";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

class BoxDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { box: {} };
    this.services = new getBoxDetails();

    console.log("las props por defecto serían estas:", this.props.match);
  }

  componentDidMount = () => this.getBoxDetails();

  getBoxDetails = () => {
    this.services
      .getBoxDetails(this.props.match.params.id)
      .then(oneBox => this.setState({ box: oneBox }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state);
    if (this.state.box.boxDetails) {
      const { boxDetails } = this.state.box;
      const machinesArr = boxDetails.material.machines;
      const restArr = boxDetails.material.rest;
      console.log(this.state);
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
                        href="#messages"
                        data-toggle="tab"
                      >
                        <i className="material-icons">face</i> Coaches
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#settings"
                        data-toggle="tab"
                      >
                        <i className="material-icons">fitness_center</i>{" "}
                        Material
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
                    <Card className="col data">
                      <div className="map">map</div>
                      <div className="schedule">
                        <h3>Schedule</h3>
                        <div>
                          <div>
                            <h4>Monday-Friday</h4>
                            <small>
                              {boxDetails.schedule.mondayToFriday.start}
                            </small>
                            {"-"}
                            <small>
                              {boxDetails.schedule.mondayToFriday.end}
                            </small>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h5>Saturday</h5>
                            <small>{boxDetails.schedule.saturday.start}</small>
                            {"-"}
                            <small>{boxDetails.schedule.saturday.end}</small>
                          </div>
                          <div>
                            <h5>Saturday</h5>
                            <small>{boxDetails.schedule.sunday.start}</small>
                            {"-"}
                            <small>{boxDetails.schedule.sunday.end}</small>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className="col data">
                      <div className="mini-data row">
                        <div className="col">
                          <h3>Machines</h3>
                          {machinesArr.map((machine, idx) => (
                            <div idx={machine}>
                              {" "}
                              <Card className="flexprop" variant="primary">
                                {machine.name} :{"  "}
                                <div variant="light">
                                  {machine.have === true ? (
                                    machine.qty
                                  ) : (
                                    <i className="material-icons icondata">
                                      not_interested
                                    </i>
                                  )}
                                </div>
                              </Card>
                            </div>
                          ))}
                        </div>
                        <div className="col">
                          <h3>Material</h3>
                          {restArr.map((rest, idx) => (
                            <div idx={rest}>
                              {" "}
                              <Card className="flexprop" variant="primary">
                                {rest.name} :{"  "}
                                <div variant="light">
                                  {rest.have === true ? (
                                    rest.upTo
                                  ) : (
                                    <i className="material-icons icondata">
                                      not_interested
                                    </i>
                                  )}
                                </div>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mini-data">test2</div>
                      <div className="mini-data">test3</div>
                    </Card>
                  </div>
                </div>
                <div className="tab-pane" id="messages">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam itaque blanditiis ipsum! Minima totam vero
                    voluptatibus in. Iusto consectetur, tempore molestiae
                    suscipit, minus vel quaerat excepturi delectus quae
                    reprehenderit quia!
                  </p>
                </div>
                <div className="tab-pane" id="settings">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat aliquid iusto illo et sed culpa possimus explicabo
                    libero nostrum! Mollitia fuga fugit cumque blanditiis amet
                    minus quae distinctio commodi deserunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default BoxDetails;
