import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navBar">
      <Navbar.Brand href="#home">Phone Catalogue</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/PhonesList">List</Nav.Link>
          <Nav.Link href="/PhoneAdd">Add</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
