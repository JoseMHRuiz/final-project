import React, { Component } from "react";
// import AuthService from "../auth/AuthService";

class Contents extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loggedInUser: null };
  //   this.service = new AuthService();
  // }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  // }
  render() {
    // let user = this.props.loggedInUser;
    console.log(this.props.userInSession);
    if (this.props.userInSession) {
      return (
        <div>
          <h1>YEEEES</h1>
          Welcome {this.props.userInSession.username} -{" "}
          {this.props.userInSession.userType}
        </div>
      );
    } else {
      return (
        <div>
          <h1>NOOOT</h1>
          {/* <h1>{user.username}</h1> */}
          {/* Welcome {this.props.userInSession.username} -{" "}
        {this.props.userInSession.userType} */}
        </div>
      );
    }
  }
}

export default Contents;
