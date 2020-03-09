// navbar/Navbar.js

import React from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import SearchInput from "../Search/SearchInput";

import { LinkContainer } from "react-router-bootstrap";

export default function NavbarCom(props) {
  // const [modalShow, setModalShow] = React.useState(false);
  const { userInSession } = props;
  const handleLogout = e => {
    props.logout();
  };
  // const handleLogin = e => {
  //   getUser();
  // };
  if (userInSession) {
    console.log(userInSession);
    return (
      <Navbar className="navbar" sticky="top" variant="dark" expand="md">
        <Navbar.Brand>SocialBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/boxes">
              <Nav.Link>Boxes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/main">
              <Nav.Link>Main</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create">
              <Nav.Link>Create</Nav.Link>
            </LinkContainer>
            <Nav.Link href="/landing">Landing</Nav.Link>
          </Nav>
          <Nav>
            <SearchInput></SearchInput>
            <ButtonToolbar>
              <SplitButton
                title={userInSession.username}
                variant="secundary"
                drop="left"
                id="dropdown-split-variants-secundary"
              >
                <LinkContainer to="/profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </LinkContainer>

                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </SplitButton>
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="navbar" sticky="top" variant="dark" expand="md">
        <Navbar.Brand href="#home">SocialBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/boxes">
              <Nav.Link>Boxes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/main">
              <Nav.Link>Main</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/landing">
              <Nav.Link>Landing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {/* <SearchStyled></SearchStyled> */}
            <SearchInput></SearchInput>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
