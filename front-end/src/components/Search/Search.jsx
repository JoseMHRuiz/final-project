import React, { Component } from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import BoxCard from "../BoxCard/BoxCard";
import IndexService from "../../services/IndexService";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: [],
      showmodal: false
    };
    this.services = new IndexService();
  }

  getSearchBox = () => {
    this.services
      .getSearchBox(this.props.match.params.box)
      .then(searchBox => {
        this.setState({ box: searchBox });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getSearchBox();
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.box.map(elm => (
            <BoxCard key={elm._id} {...elm} />
          ))}
        </Row>
      </div>
    );
  }
}
