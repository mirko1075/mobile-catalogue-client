import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./ResetCss.css";
import "./App.css";
import PhonesList from "./pages/PhonesList";
import PhoneAdd from "./pages/PhoneAdd";
import FilterComponent from "./components/FilterComponent";
import RouteNotFound from "./pages/RouteNotFound";
function App() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">Home Catalogue</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/PhonesList">List</Nav.Link>
                <Nav.Link href="/PhoneAdd">Add</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <FilterComponent />
          <Routes>
            <Route path="/" element={<PhonesList />} />
            <Route path="/PhonesList" element={<PhonesList />} />
            <Route path="/PhoneAdd" element={<PhoneAdd />} />
            <Route path="/PhoneAdd" element={<PhoneAdd />} />
            <Route component={<RouteNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
