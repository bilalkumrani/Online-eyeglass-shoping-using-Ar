import React from "react";
import User from "./user";
import Notifications from "./notifications";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function NavigationBar(props) {
  const { activeUser, removeUser } = props;
  return (
    <nav className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className=""
      >
        <Container>
          <Navbar.Brand href="#home">Admin-Dashbaord</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ms-4">
              <User activeUser={activeUser} removeUser={removeUser} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavigationBar;
