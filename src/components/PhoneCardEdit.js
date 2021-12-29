
import React, {useState} from 'react'
import { Button, Card, Form, Row } from "react-bootstrap";
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
        imageFileName,
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
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const phoneObj = {
            id,
            phone_name:phoneNameVal,
            manufacturer:manufacturerVal,
            description:descriptionVal,
            color:colorVal,
            price:priceVal,
            imageFileName:imageFileNameVal,
            screen:screenVal,
            processor:processorVal,
            ram:ramVal
        }
        const result = await editPhone(phoneObj);
        console.log('result :>> ', result);
        setIsFlipped(!isFlipped)
    }
    const [phoneNameVal, setPhoneNameVal] = useState(phone_name);
    const [manufacturerVal,setManufacturerVal]= useState(manufacturer);
    const [descriptionVal, setDescriptionVal] = useState(description);
    const [colorVal, setColorVal] = useState(color);
    const [priceVal, setPriceVal] = useState(price);
    const [imageFileNameVal, setImageFileNameVal] = useState(imageFileName);
    const [screenVal, setScreenVal] = useState(screen);
    const [processorVal, setProcessorVal] = useState(processor);
    const [ramVal, setRamVal] = useState(ram);

const handleValue = (e) =>{
    console.log('e :>> ', e.target.value);
}

    return (
        <Card style={{ width: "30rem" }} className="phone">
            <Card.Body style={mystyle}>
                <Form> 
                    <Row>
                        <Form.Group  className="mb-3" controlId="phoneNameVal">
                            <Form.Label>Phone name</Form.Label>
                            <Form.Control type="text" defaultValue={phoneNameVal} onChange={e=>setPhoneNameVal(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="manufacturerVal">
                            <Form.Label>Phone manufacturer</Form.Label>
                            <Form.Control type="text" defaultValue={manufacturerVal} onChange={e=>setManufacturerVal(e.target.name)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="descriptionVal">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" defaultValue={descriptionVal} onChange={e=>setDescriptionVal(e.target.name)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="colorVal">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" defaultValue={colorVal} onChange={e=>setColorVal(e.target.name)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="priceVal">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" step={0.01}  defaultValue={priceVal} onChange={e=>setPriceVal(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="imageFileNameVal">
                            <Form.Label>Image file URL</Form.Label>
                            <Form.Control type="text" defaultValue={imageFileNameVal} onChange={e=>setImageFileNameVal(e.target.name)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="screenVal">
                            <Form.Label>Screen</Form.Label>
                            <Form.Control type="text" defaultValue={screenVal} onChange={e=>setScreenVal(e.target.name)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="processorVal">
                            <Form.Label>Processor</Form.Label>
                            <Form.Control type="text" defaultValue={processorVal} onChange={e=>setProcessorVal(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group  className="mb-3" controlId="ramVal">
                            <Form.Label>RAM</Form.Label>
                            <Form.Control type="text" defaultValue={ramVal} onChange={e=>setRamVal(e.target.name)} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default withContext(PhoneCardEdit)