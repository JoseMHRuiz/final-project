import React from "react";
import "./Boxes.scss";
import BoxCard from "../BoxCard/BoxCard";
import Form from "react-bootstrap/Form";
// import { FormControl, Input } from "@material-ui/core";
import FormControl from "react-bootstrap/FormControl";
import IndexService from "../../services/IndexService";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: [],
      boxes: [],
      allBoxes: {}
    };
    this.serviceBoxes = new IndexService();
    console.log(this.props);
  }
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

  componentDidMount = () => {
    this.serviceBoxes.findAll().then(response => {
      this.setState({
        allBoxes: response.boxes,
        initialItems: response.boxes,
        items: response.boxes,
        boxes: response.boxes
      });
    });
  };

  render() {
    const { items } = this.state;
    const { allBoxes } = this.state;
    console.log(this.state);
    if (allBoxes) {
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
