import React from "react";
// import { Link } from "react-router-dom";
// import IndexService from "../../services/IndexService";
// import { Link } from "react-router-dom";
import "./BoxDetails.scss";

function BoxDetails(props) {
  const { oneBox } = props;
  const box = oneBox[0];
  if (oneBox) {
    console.log(box);
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
                    <a className="nav-link" href="#messages" data-toggle="tab">
                      <i className="material-icons">face</i> Coaches
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#settings" data-toggle="tab">
                      <i className="material-icons">fitness_center</i> Material
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">{box.boxName}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body ">
            <div className="tab-content text-center">
              <div className="tab-pane active" id="profile">
                <div className="row">
                  <div className="col data">
                    <div className="map">map</div>
                    <div className="schedule">schedule</div>
                  </div>
                  <div className="col data">
                    <div className="mini-data row">
                      <ul className="col">
                        <li className="">
                          AirRunner :{" "}
                          {box.material.machines.airunner.have === true &&
                            box.material.machines.airunner.qty}
                        </li>
                      </ul>
                      <ul className="col">
                        <li className="">
                          Dumbbell:{" "}
                          {box.material.dumbell.have === true &&
                            box.material.dumbell.upTo}{" "}
                          Kg
                        </li>
                      </ul>
                    </div>
                    <div className="mini-data">test2</div>
                    <div className="mini-data">test3</div>
                  </div>
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

export default BoxDetails;
