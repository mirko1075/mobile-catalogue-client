import React, {useRef, useState} from 'react'
import { withContext } from '../context/GlobalContext'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch}  from "react-icons/fa";
import { FaWindowClose}  from "react-icons/fa";


const FilterComponent = (props) => {
    const [inputText, setInputText] = useState("")
    const {phoneList, setPhoneListFiltered} = props

    const searchProduct = (e) =>{
        console.log(`phoneList`, phoneList)
        console.log('phoneList: inputText :>> ', inputText);
        const phoneListTemp = phoneList.filter(phone=>phone.phone_name.toLowerCase().includes(inputText.toLowerCase()) 
        || phone.description.toLowerCase().includes(inputText.toLowerCase()) 
        || phone.manufacturer.toLowerCase().includes(inputText.toLowerCase())
        || phone.description.toLowerCase().includes(inputText.toLowerCase()) 
        || phone.screen.toLowerCase().includes(inputText.toLowerCase()) 
        || phone.processor.toLowerCase().includes(inputText.toLowerCase()))
        console.log(`phoneListTemp`, phoneListTemp)
        setPhoneListFiltered(phoneListTemp)
    }

    const resetSearch = () =>{
        setInputText("")
        setPhoneListFiltered(phoneList)
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    value={inputText}
                    onChange={e=>setInputText(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon1" onClick={searchProduct}>
                    <FaSearch  />
                </Button>
                <Button variant="outline-secondary" id="button-addon1" onClick={resetSearch}>
                    <FaWindowClose />
                </Button>
            </InputGroup>

        </div>
    )
}

export default  withContext(FilterComponent);