import React, { useState } from "react";
import { withContext } from "../context/GlobalContext";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const FilterComponent = props => {
  const [inputText, setInputText] = useState("");
  const { phoneList, setPhoneListFiltered, phoneListFiltered} = props;

  const searchPhone = () => {
    const phoneListTemp = phoneList.filter(
      phone =>
        phone.phone_name.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.description.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.manufacturer.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.description.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.screen.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.processor.toLowerCase().includes(inputText.toLowerCase())
    );
    setPhoneListFiltered([...phoneListTemp]);
  };
  const sortList = order => {
    console.log('phoneListFiltered antes :>> ', phoneListFiltered);
    order === "asc"
      ? setPhoneListFiltered([...phoneListFiltered.sort((a, b) => a.manufacturer.localeCompare(b.manufacturer))])
      : setPhoneListFiltered([...phoneListFiltered.sort((a, b) => b.manufacturer.localeCompare(a.manufacturer))])
  };

  const resetSearch = () => {
    setInputText("");
    setPhoneListFiltered([...phoneList]);
  };

  return (
    <div>
      <InputGroup className="mb">
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Search...."
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={searchPhone}
        >
          <FaSearch />
        </Button>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={resetSearch}
        >
          <FaWindowClose />
        </Button>
      </InputGroup>
      <div className="d-flex flex-row flex-wrap align-items-center align-content-start justify-content-around"  style={{marginTop:"15px"}}>
        <Button
          variant="outline-secondary"
          id="button-addon3"
          onClick={() => sortList("asc")}
        >
          Brand asc
        </Button>
        <Button
          variant="outline-secondary"
          id="button-addon4"
          onClick={() => sortList("desc")}
        >
          Brand desc
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
