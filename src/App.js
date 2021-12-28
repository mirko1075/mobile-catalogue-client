import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './ResetCss.css';
import './App.css';
import PhonesList from "./pages/PhonesList";
import PhoneDetail from "./pages/PhoneDetail";
import PhoneAdd from "./pages/PhoneAdd";
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div className="App">
      <NavbarComponent  />
      <Routes>
        <Route path="/" element={<PhonesList />} />
        <Route path="PhoneDetail" element={<PhoneDetail />} />
        <Route path="PhoneAdd" element={<PhoneAdd />} />
      </Routes>
    </div>
  );
}

export default App;
