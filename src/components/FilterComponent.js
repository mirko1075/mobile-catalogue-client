import React, { useState } from "react";
import { withContext } from "../context/GlobalContext";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const FilterComponent = props => {
  const [inputText, setInputText] = useState("");
  const { phoneList, setPhoneListFiltered, phoneListFiltered, filterOn, setfilterOn} = props;
  const [phoneListPreFilter, setPhoneListPreFilter] = useState([...phoneListFiltered]);

  const searchPhone = () => {
    console.log('inputText :>> ', inputText);
    const phoneListTemp = phoneListFiltered.filter(
      phone =>
        phone.phone_name.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.description.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.manufacturer.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.description.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.screen.toLowerCase().includes(inputText.toLowerCase()) ||
        phone.processor.toLowerCase().includes(inputText.toLowerCase())
    );
    console.log('phoneListTemp :>> ', phoneListTemp);
    setPhoneListFiltered([...phoneListTemp]);

  };
  const sortList = order => {
    order === "desc"
      ?phoneListFiltered.sort((a, b) => {
        return  a.manufacturer<b.manufacturer? 1 : -1
      })
      :phoneListFiltered.sort((a, b) => {
        return  a.manufacturer>b.manufacturer? 1 : -1
      })
    setfilterOn(!filterOn)

  };

  const resetSearch = () => {
    console.log('phoneListPreFilter :>> ', phoneListPreFilter);
    setInputText("");
    setPhoneListFiltered([...phoneListPreFilter]);
  };

  useState(()=>{
    console.log('phoneListFiltered useEffect :>> ', phoneListFiltered);
    console.log('phoneListPreFilter useEffect :>> ', phoneListPreFilter);

    if (phoneListFiltered.length) setPhoneListPreFilter([...phoneListFiltered])
  },[phoneListFiltered])  
  
  useState(()=>{
    console.log('phoneListPreFilter useEffect :>> ', phoneListPreFilter);
    console.log('phoneListFiltered useEffect :>> ', phoneListFiltered);

  },[phoneListPreFilter])

  return (
    <div style={{padding:"20px"}}>
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
