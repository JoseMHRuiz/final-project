// auth/auth-service.js
import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }

  signup = (username, password, email, img) => {
    return this.service
      .post("/auth/signup", {
        username,
        password,
        email,
        img
      })
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          /* the request was made and the server responded
          with a status code that falls out of the range of 2xx */
          console.log(error.response.data);
        }
        return error.response.data;
      });
  };

  login = (username, password) => {
    return this.service
      .post("/auth/login", {
        username,
        password
      })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service
      .get("/auth/currentUser")
      .then(response => response.data);
  };
  loggedinProfile = () => {
    return this.service
      .get("/auth/currentUserprofile")
      .then(response => response.data);
  };

  logout = () => {
    return this.service.get("/auth/logout").then(response => response.data);
  };
}

export default AuthService;
