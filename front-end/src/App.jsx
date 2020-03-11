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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      allBoxes: {},
      _onlyOne: {}
    };
    this.service = new AuthService();
    this.serviceBoxes = new IndexService();

    this.fetchUser();
  }
  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };
  logout = () => {
    this.service.logout().then(() => {
      this.setState({
        loggedInUser: null
      });
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

  render() {
    const { loggedInUser } = this.state;
    const { logout } = this;
    if (loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
            <NavbarCom
              userInSession={loggedInUser}
              getUser={this.getUser}
              logout={logout}
            />{" "}
          </div>{" "}
          <Switch>
            {" "}
            <Route
              exact
              path="/profile"
              render={() => <Profile userInSession={loggedInUser} />}
            />
            <Route exact path="/boxes" render={() => <Boxes></Boxes>} />
            <Route
              path="/boxes/:id"
              render={props => (
                <BoxDetails userInSession={loggedInUser} {...props} />
              )}
            />
            <Route exact path="/main" render={() => <Main></Main>} />
            <Route
              path="/create"
              render={props => <CreateBox userInSession={loggedInUser} />}
            />
          </Switch>
        </React.Fragment>
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
            <Route exact path="/main" render={() => <Main></Main>} />
            <Route
              exact
              path="/boxes"
              render={() => (
                <Boxes getOneById={id => this._onlyOne(id)}></Boxes>
              )}
            />
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
