import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComp from "./components/Navbar";
import PhonesList from "./pages/PhonesList";
import PhoneAdd from "./pages/PhoneAdd";
import RouteNotFound from "./pages/RouteNotFound";
import PhoneEdit from "./pages/PhoneEdit";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <div>
        <Routes>
          <Route path="/" element={<PhonesList />} />
          <Route path="/PhonesList" element={<PhonesList />} />
          <Route path="/PhoneAdd" element={<PhoneAdd />} />
          <Route path="/PhoneEdit/:id" element={<PhoneEdit />} />
          <Route element={<RouteNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
