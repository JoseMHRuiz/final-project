import React from "react";
import "./Boxes.scss";
import BoxCard from "../BoxCard/BoxCard";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import IndexService from "../../services/IndexService";
import AuthService from "../../services/AuthService";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/ClipLoader";
import Select from "react-select";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const options = [
  { label: "Can drop the bar", value: "dropBar" },
  { label: "Kid class", value: "kidsClass" },
  { label: "Affiliate", value: "affiliate" },
  { label: "Beginners class", value: "juniorClass" },
  { label: "Open box", value: "openBox" }
];

export default class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: [],
      favActive: [],
      isFaved: false,
      loggedInUser: null
    };
    this.service = new AuthService();
    this.serviceBoxes = new IndexService();
  }

  myColor = box => {
    if (this.state.favActive.includes(box)) {
      return "error";
    }
    return "disabled";
  };

  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return (
        item.boxName.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({ items: items });
  };
  filterListSelect = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      switch (event.value) {
        case "affiliate":
          return item.affiliate;
        case "dropBar":
          return item.dropBar;
        case "juniorClass":
          return item.juniorClass;
        case "openBox":
          return item.openBox;
        case "kidsClass":
          return item.kidsClass;
      }
    });
    this.setState({ items: items });
  };
  fetchAll = () => {
    this.serviceBoxes.findAll().then(response => {
      this.setState({
        initialItems: response.boxes,
        items: response.boxes
      });
    });
    this.fetchUser();
  };
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
          favActive: response.favs
          // positionArr: response.favs
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }
  addfav = box => {
    const { _id } = this.state.loggedInUser;
    this.serviceBoxes.addfav(box, _id).then(() => {
      this.fetchAll();
    });
  };
  componentDidMount = () => this.fetchAll();
  render() {
    const { items } = this.state;
    if (items) {
      return (
        <div className="Boxes">
          <div id="card-nav-tabs" className="card card-nav-tabs">
            <div id="card-header" className="card-header-primary">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <ul className="nav nav-tabs boxes" data-tabs="tabs">
                    <li className="nav-item">
                      <Form>
                        <FormControl
                          size="md"
                          type="text"
                          placeholder="Search by name"
                          onChange={this.filterList}
                        />
                      </Form>
                    </li>
                    <li className="nav-item">
                      <Select
                        options={options}
                        onChange={this.filterListSelect}
                        label="Pick one to filter"
                        id="select-box"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body ">
              <div className="tab-content text-center">
                <div className="tab-pane active" id="profile">
                  <div className="mini-data row cont-box-card">
                    {items.map(box => (
                      <BoxCard
                        key={box._id}
                        addfav={this.addfav}
                        favColor={this.myColor}
                        userInSession={this.state.loggedInUser}
                        {...box}
                        box
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <DotLoader css={override} />;
    }
  }
}
