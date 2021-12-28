import React from 'react';
import { Navbar, Button } from 'reactstrap';
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <Navbar>
      <div>
      <Link to="/PhoneList"><Button color="primary"  outline>List phones</Button></Link>
      <Link to="/PhoneAdd"><Button color="primary" outline>Add phones</Button></Link>
      </div>
    </Navbar>
  );
}
