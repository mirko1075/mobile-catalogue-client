import React, { useState, useEffect } from "react";
import { withContext } from "../context/GlobalContext";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";

const FilterComponent = (props) => {
  const [inputText, setInputText] = useState("");
  const {phoneList, phoneListFiltered, setPhoneListFiltered } = props;
  const [phoneListPreFilter, setPhoneListPreFilter] = useState([]);

  const searchPhone = () => {
    const phoneListTemp = phoneListFiltered.filter(
      (phone) =>
        phone.phone_name.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.description.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.manufacturer.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.description.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.screen.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.processor.toLowerCase().includes(inputText.toLowerCase())
    );
    setPhoneListFiltered([...phoneListTemp]);
  };
  const sortList = (order) => {
    order === "desc"
      ? setPhoneListFiltered([...phoneListPreFilter.sort((a, b) => {
          return a.manufacturer < b.manufacturer ? 1 : -1;
        })])
      : setPhoneListFiltered([...phoneListPreFilter.sort((a, b) => {
          return a.manufacturer > b.manufacturer ? 1 : -1;
        })])
  };

  const resetSearch = () => {
    setInputText("");
    setPhoneListFiltered([...phoneList]);
  };

  useEffect(() => {
    phoneListFiltered?.length && setPhoneListPreFilter([...phoneListFiltered]);
  }, [phoneListFiltered,]);


  return (
    <div className="mainContainer">
      <div>
        <InputGroup className="mb-2">
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Search...."
          />
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={searchPhone}
          >
            <FaSearch />
          </Button>
        </InputGroup>
      </div>
      <div className="buttonFilterDiv">
      <div>Sort by brand</div>
        <Button
          variant="outline-secondary"
          id="button-addon3"
          onClick={() => sortList("asc")}
        >
          <FaArrowUp/>
        </Button>
        <Button
          variant="outline-secondary"
          id="button-addon4"
          onClick={() => sortList("desc")}
        >
          <FaArrowDown/>
        </Button>
        <Button
          variant="outline-secondary"
          id="button-addon5"
          onClick={resetSearch}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default withContext(FilterComponent);
