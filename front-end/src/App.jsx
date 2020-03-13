import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./services/AuthService";
import NavbarCom from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Boxes from "./components/Boxes/Boxes";
import BoxDetails from "./components/BoxDetails/BoxDetails";
import IndexService from "./services/IndexService";
import Search from "./components/Search/Search";
import CreateBox from "./components/createBox/createBox";
import history from "./history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      loggedInUserProf: null,
      allBoxes: {},
      _onlyOne: {}
    };
    this.service = new AuthService();
    this.serviceBoxes = new IndexService();

    this.fetchUser();
    this.fetchUserProf();
  }
  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
    this.fetchUserProf();
  };
  logout = () => {
    this.service.logout().then(() => {
      this.setState({
        loggedInUser: null
      });
      history.push("/");
    });
  };
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }
  fetchUserProf() {
    return this.service
      .loggedinProfile()
      .then(response => {
        this.setState({
          loggedInUserProf: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUserProf: false
        });
      });
  }

  render() {
    const { loggedInUser } = this.state;
    const { loggedInUserProf } = this.state;
    const { logout } = this;
    if (loggedInUser) {
      return (
        <Switch>
          <div className="App">
            <NavbarCom
              userInSession={loggedInUser}
              getUser={this.getUser}
              logout={logout}
            />{" "}
            <Route exact path="/" render={() => <Main></Main>} />
            <Route
              exact
              path="/profile"
              render={() => <Profile userInSession={loggedInUserProf} />}
            />
            <Route
              exact
              path="/boxes"
              render={() => <Boxes userInSession={loggedInUser}></Boxes>}
            />
            <Route
              path="/boxes/:id"
              render={props => (
                <BoxDetails userInSession={loggedInUser} {...props} />
              )}
            />
            <Route
              path="/create"
              render={props => <CreateBox userInSession={loggedInUser} />}
            />
          </div>
        </Switch>
      );
    } else {
      return (
        <div className="App">
          <NavbarCom userInSession={loggedInUser} getUser={this.getUser} />{" "}
          <Switch>
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getUser} />}
            />
            <Route exact path="/" render={() => <Main></Main>} />
            <Route exact path="/boxes" render={() => <Boxes></Boxes>} />
            <Route
              path="/boxes/:id"
              render={props => <BoxDetails {...props} />}
            />
            />{" "}
            <Route
              path="/box/search/:box"
              render={match => (
                <Search {...match} loggedInUser={this.state.loggedInUser} />
              )}
            />
          </Switch>{" "}
        </div>
      );
    }
  }
}

export default App;
