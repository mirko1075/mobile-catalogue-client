
import React, {useEffect, useState} from 'react'
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { withContext } from '../context/GlobalContext'
import CardDetail from '../components/CardDetail';
import { createContext } from "react";
const PhoneAdd = ({addPhone}) => {
  const [phoneNameVal, setPhoneNameVal] = useState("");
  const [manufacturerVal,setManufacturerVal]= useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [image_file_name_val, setImage_file_name_val] = useState("");
  const [screenVal, setScreenVal] = useState("");
  const [processorVal, setProcessorVal] = useState("");
  const [ramVal, setRamVal] = useState("");
  const [createdPhone, setCreatedPhone] = useState({})
  const [isCreated, setIsCreated]  = useState(false)
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('image_file_name_val :>> ', image_file_name_val);
    const phoneObj = {
        phone_name:phoneNameVal,
        manufacturer:manufacturerVal,
        description:descriptionVal,
        color:colorVal,
        price:priceVal,
        image_file_name:image_file_name_val,
        screen:screenVal,
        processor:processorVal,
        ram:ramVal
    }
    const result = await addPhone(phoneObj);
    if (result.data){
      setCreatedPhone(result.data);
      setIsCreated(true)
    }else{

    }
}

const resetForm = () =>{
  setPhoneNameVal("");
  setManufacturerVal("");
  setDescriptionVal("");
  setColorVal("");
  setPriceVal(0);
  setImage_file_name_val("");
  setScreenVal("");
  setProcessorVal(0);
  setRamVal("");

}
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };


  return (

      !isCreated?
      <>
      <div>Phone Add</div>
        <Card style={{ width: "30rem" }} className="phone">
            <Card.Body style={mystyle}>
                <Form> 
                    <Row>
                        <Col><label htmlFor='phoneNameVal'>Phone name</label></Col>
                        <Col><input className="input" type="text" value={phoneNameVal} onChange={e=>setPhoneNameVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='manufacturerVal'>Phone manufacturer</label></Col>
                        <Col><input className="input" type="text" value={manufacturerVal} onChange={e=>setManufacturerVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='descriptionVal'>Description</label></Col>
                        <Col><textarea cols={22} rows={5} className="textarea" value={descriptionVal} onChange={e=>setDescriptionVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='colorVal'>Color</label></Col>
                        <Col><input className="input" type="text" value={colorVal} onChange={e=>setColorVal(e.target.value)} /></Col>
                    </Row>
                    <Row style={{flexDirection:"row"}}>
                        <Col><label htmlFor='priceVal'>Price €</label></Col>
                        <Col><input className="input" type="number" step={0.01}  value={priceVal} onChange={e=>setPriceVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='image_file_name_val'>Image file URL</label></Col>
                        <Col><input className="input" type="text" value={image_file_name_val} onChange={e=>setImage_file_name_val(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='screenVal'>Screen</label></Col>
                        <Col><input className="input" type="text" value={screenVal} onChange={e=>setScreenVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='processorVal'>Processor</label></Col>
                        <Col><input className="input" type="text" value={processorVal} onChange={e=>setProcessorVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='ramVal'>RAM</label></Col>
                        <Col><input className="input" type="text" value={ramVal} onChange={e=>setRamVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                      <Col className='phone-buttons-container'>
                          <Button variant="primary" type="submit" onClick={handleSubmit}>
                              Submit
                          </Button>
                          <Button variant="primary" type="submit" onClick={resetForm}>
                              Reset
                          </Button>
                      </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        </>
        : <CardDetail phone={createdPhone} />


  );
}

export default withContext(PhoneAdd)