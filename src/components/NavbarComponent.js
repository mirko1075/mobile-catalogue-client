import React from 'react'
import { Container, Navbar, Nav, FormControl,Form, Button } from 'react-bootstrap';


function NavbarComponent() {
    return (
      <nav>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Phone Catalogue</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
    )
}

export default NavbarComponent;