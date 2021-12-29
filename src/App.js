import React, {useState}  from "react";
import { Routes, Route, Link } from "react-router-dom";
import './ResetCss.css';
import './App.css';
import PhonesList from "./pages/PhonesList";
import PhoneDetail from "./pages/PhoneDetail";
import PhoneAdd from "./pages/PhoneAdd";
import { PhonesContext } from "./context/PhonesContext";
import NavbarComponent from "./components/NavbarComponent";
function App() {
  const [phoneList, setPhoneList] = useState([])
  const [phoneListToShow, setPhoneListToShow] = useState([])
  return (
    <div className="App">

      <PhonesContext.Provider value={{phoneList, setPhoneList, phoneListToShow, setPhoneListToShow}}>
      <NavbarComponent  />
      <Routes>
        <Route exact path="/" element={<PhonesList />} />
        <Route exact path="/PhonesList" element={<PhonesList />} />
        <Route  path="PhoneDetail" element={<PhoneDetail />} />
        <Route  path="PhoneAdd" element={<PhoneAdd />} />
      </Routes>
      </PhonesContext.Provider>

    </div>
  );
}

export default App;
