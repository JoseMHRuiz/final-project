import React from "react";
import "./Boxes.scss";
import BoxCard from "../BoxCard/BoxCard";
import Form from "react-bootstrap/Form";
// import { FormControl, Input } from "@material-ui/core";
import FormControl from "react-bootstrap/FormControl";
import IndexService from "../../services/IndexService";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/ClipLoader";
import Select from "react-select";
import { Switch } from "@material-ui/core";

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
      items: []
    };
    this.serviceBoxes = new IndexService();
    console.log(this.props);
  }
  filterList = event => {
    console.log(event);

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
    console.log(event.value);
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
    console.log(items);
    this.setState({ items: items });
  };

  componentDidMount = () => {
    this.serviceBoxes.findAll().then(response => {
      this.setState({
        initialItems: response.boxes,
        items: response.boxes
      });
    });
  };

  render() {
    const { items } = this.state;
    console.log(this.state);
    if (items) {
      return (
        <div className="Boxes">
          <div className="card card-nav-tabs">
            <div className="card-header card-header-primary">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <ul className="nav nav-tabs boxes" data-tabs="tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#profile"
                        data-toggle="tab"
                      >
                        <i className="material-icons">face</i> Boxes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a>
                        <Form>
                          <FormControl
                            size="lg"
                            type="text"
                            placeholder="Search"
                            onChange={this.filterList}
                          />
                        </Form>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a>
                        <Select
                          options={options}
                          onChange={this.filterListSelect}
                          id="select-box"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body ">
              <div className="tab-content text-center">
                <div className="tab-pane active" id="profile">
                  <div className="cont-box-card">
                    {items.map(box => (
                      <BoxCard key={box._id} {...box} box />
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
