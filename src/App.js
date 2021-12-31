import React from "react";
import { Routes, Route } from "react-router-dom";

import "./ResetCss.css";
import "./App.css";
import NavbarComp from "./components/Navbar";
import PhonesList from "./pages/PhonesList";
import PhoneAdd from "./pages/PhoneAdd";

import RouteNotFound from "./pages/RouteNotFound";
function App() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <NavbarComp  />
          <Routes>
            <Route path="/" element={<PhonesList />} />
            <Route path="/PhonesList" element={<PhonesList />} />
            <Route path="/PhoneAdd" element={<PhoneAdd />} />
            <Route path="/PhoneAdd" element={<PhoneAdd />} />
            <Route path="*" component={<RouteNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
