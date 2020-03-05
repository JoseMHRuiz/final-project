import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import "bulma/css/bulma.css";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./services/AuthService";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();

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

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
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
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <Redirect to="/" />
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={loggedInUser} logout={logout} />{" "}
            </header>{" "}
            {/* <Contents userInSession={loggedInUser}> </Contents>{" "} */}
          </div>{" "}
          <Switch>
            {" "}
            <Route exact path="/" render={() => <Landing> </Landing>} />
            <Route
              exact
              path="/profile"
              render={() => <Profile userInSession={loggedInUser} />}
            />
            <Route exact path="/home" render={() => <Home></Home>} />
          </Switch>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <div className="App">
          <Redirect to="/" />
          <header className="App-header">
            <Navbar userInSession={loggedInUser} />{" "}
          </header>{" "}
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
            <Route exact path="/home" render={() => <Home></Home>} />
            <Route
              exact
              path="/"
              render={() => (
                <div className="App">
                  <Landing> </Landing>{" "}
                </div>
              )}
            />{" "}
          </Switch>{" "}
          <Redirect to="/" />
        </div>
      );
    }
  }
}

export default App;
