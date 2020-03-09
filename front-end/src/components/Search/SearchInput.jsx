import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      redirect: null
    };
  }

  handleChange(event) {
    const newValueSearch = event.target.value;
    console.log(newValueSearch);
    this.setState({
      search: newValueSearch
    });
  }

  handleSubmit(event) {
    console.log(this.state.search);
    event.preventDefault();
    this.setState({
      redirect: `/box/search/${this.state.search}`
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="searchBar">
        <Form inline onSubmit={e => this.handleSubmit(e)}>
          <FormControl
            type="text"
            placeholder="Name of the box"
            className="mr-sm-2"
            onChange={event => this.handleChange(event)}
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchInput;
