// navbar/Navbar.js

import React from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import { LinkContainer } from "react-router-bootstrap";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));
export default function NavbarCom(props) {
  const classes = useStyles();
  const { userInSession } = props;
  const handleLogout = e => {
    props.logout();
  };
  if (userInSession) {
    return (
      <Navbar className="navbar" sticky="top" expand="md">
        <LinkContainer className="transclass" to="/">
          <Nav.Link>SocialBox</Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer className="transclass" to="/boxes">
              <Nav.Link>Boxes</Nav.Link>
            </LinkContainer>
            <LinkContainer className="transclass" to="/">
              <Nav.Link>Main</Nav.Link>
            </LinkContainer>
            <LinkContainer className="transclass" to="/create">
              <Nav.Link>Create</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link>
              <ButtonToolbar>
                <SplitButton
                  variant="secundary"
                  drop="left"
                  id="dropdown-split-variants-secundary"
                  title={
                    <Avatar
                      alt={userInSession.username}
                      src={userInSession.img}
                      className={classes.small}
                    />
                  }
                >
                  <LinkContainer to="/profile">
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </LinkContainer>

                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </SplitButton>
              </ButtonToolbar>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="navbar" sticky="top" expand="md">
        <LinkContainer className="transclass" to="/">
          <Nav.Link>SocialBox</Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer className="transclass" to="/boxes">
              <Nav.Link>Boxes</Nav.Link>
            </LinkContainer>
            <LinkContainer className="transclass" to="/">
              <Nav.Link>Main</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer className="transclass" to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
