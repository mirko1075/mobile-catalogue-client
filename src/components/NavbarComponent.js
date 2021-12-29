import React, {useRef, useState} from 'react'
import { Container, Navbar, Nav, FormControl,Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMobile }  from "react-icons/fa";


const NavbarComponent = (props) => {

  return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><FaMobile width={24} height={24} />Phone Catalogue </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/PhonesList">List</Nav.Link>
            <Nav.Link href="/PhoneAdd">Add</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarComponent;