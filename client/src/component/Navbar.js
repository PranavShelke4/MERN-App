import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function navbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>MERN Login App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
              <NavLink id="nav-item" to={"/"}>Home</NavLink>
              <NavLink id="nav-item" to={"/about"}>About</NavLink>
              <NavLink id="nav-item" to={"/contact"}>Contact</NavLink>
              <NavLink id="nav-item" to={"/login"}>Login</NavLink>
              <NavLink id="nav-item" to={"/signup"}>Signup</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
