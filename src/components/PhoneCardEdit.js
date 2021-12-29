
import React, {useEffect, useState} from 'react'
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { withContext } from '../context/GlobalContext'


const PhoneCardEdit = (props) =>{
    const {phone, handleClick, handleRemovePhone, isFlipped, setIsFlipped, editPhone} = props
    const {
        id,
        phone_name,
        manufacturer,
        description,
        color,
        price,
        image_file_name,
        screen,
        processor,
        ram
      }= phone
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
      };
    
    const [phoneNameVal, setPhoneNameVal] = useState(phone_name);
    const [manufacturerVal,setManufacturerVal]= useState(manufacturer);
    const [descriptionVal, setDescriptionVal] = useState(description);
    const [colorVal, setColorVal] = useState(color);
    const [priceVal, setPriceVal] = useState(price);
    const [image_file_name_val, setImage_file_name_val] = useState(image_file_name);
    const [screenVal, setScreenVal] = useState(screen);
    const [processorVal, setProcessorVal] = useState(processor);
    const [ramVal, setRamVal] = useState(ram);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('image_file_name_val :>> ', image_file_name_val);
        const phoneObj = {
            id,
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
        const result = await editPhone(phoneObj);
        console.log('result :>> ', result);
        setIsFlipped(!isFlipped)
    }

    const cancelEdit = () =>{
        setIsFlipped(!isFlipped) 
    }
    return (
        <Card style={{ width: "30rem" }} className="phone">
            <Card.Body style={mystyle}>
                <Form> 
                    <Row>
                        <Col><label htmlFor='phoneNameVal'>Phone name</label></Col>
                        <Col><input className="input" type="text" defaultValue={phoneNameVal} onChange={e=>setPhoneNameVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='manufacturerVal'>Phone manufacturer</label></Col>
                        <Col><input className="input" type="text" defaultValue={manufacturerVal} onChange={e=>setManufacturerVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='descriptionVal'>Description</label></Col>
                        <Col><textarea cols={22} rows={5} className="textarea"  defaultValue={descriptionVal} onChange={e=>setDescriptionVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='colorVal'>Color</label></Col>
                        <Col><input className="input" type="text" defaultValue={colorVal} onChange={e=>setColorVal(e.target.value)} /></Col>
                    </Row>
                    <Row style={{flexDirection:"row"}}>
                        <Col><label htmlFor='priceVal'>Price €</label></Col>
                        <Col><input className="input" type="number" step={0.01}  defaultValue={priceVal} onChange={e=>setPriceVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='image_file_name_val'>Image file URL</label></Col>
                        <Col><input className="input" type="text" defaultValue={image_file_name_val} onChange={e=>setImage_file_name_val(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='screenVal'>Screen</label></Col>
                        <Col><input className="input" type="text" defaultValue={screenVal} onChange={e=>setScreenVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='processorVal'>Processor</label></Col>
                        <Col><input className="input" type="text" defaultValue={processorVal} onChange={e=>setProcessorVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor='ramVal'>RAM</label></Col>
                        <Col><input className="input" type="text" defaultValue={ramVal} onChange={e=>setRamVal(e.target.value)} /></Col>
                    </Row>
                    <Row>
                        <Col className='phone-buttons-container'>
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Button variant="primary" type="submit" onClick={cancelEdit}>
                                Cancel
                            </Button>
                        </Col>
                </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default withContext(PhoneCardEdit)