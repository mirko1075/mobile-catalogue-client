import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Form, FloatingLabel } from "react-bootstrap";
import { withContext } from "../context/GlobalContext";
import { readFileAsDataURL } from "../helpers/functions";

const PhoneCardEdit = props => {
  const {
    phone,
    isFlipped,
    setIsFlipped,
    editPhone
  } = props;
  const {
    id,
    phone_name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
    file
  } = phone;


  const [phoneNameVal, setPhoneNameVal] = useState(phone_name);
  const [manufacturerVal, setManufacturerVal] = useState(manufacturer);
  const [descriptionVal, setDescriptionVal] = useState(description);
  const [colorVal, setColorVal] = useState(color);
  const [priceVal, setPriceVal] = useState(price);
  const [screenVal, setScreenVal] = useState(screen);
  const [processorVal, setProcessorVal] = useState(processor);
  const [ramVal, setRamVal] = useState(ram);
  const [selectedFile, setSelectedFile]=useState("")
  const [fileToShow, setFileToShow] = useState(file)

  const handleSubmit = async e => {
    e.preventDefault();
    let B64File="";
    if (selectedFile){ 
      B64File= await readFileAsDataURL(selectedFile)
      console.log('B64File :>> ', B64File);
    }
    
    const phoneObj = {
      id,
      phone_name: phoneNameVal,
      manufacturer: manufacturerVal,
      description: descriptionVal,
      color: colorVal,
      price: priceVal,
      screen: screenVal,
      processor: processorVal,
      ram: ramVal,
      B64File:B64File
    };
    console.log('phoneObj :>> ', phoneObj);
    const result = await editPhone(phoneObj);
    console.log('result :>> ', result);
    setIsFlipped(!isFlipped);
  };

  const cancelEdit = () => {
    setIsFlipped(!isFlipped);
  };

    // On file select (from the pop up)
    const onFileChange =  (event) => {
        // Update the state
      setSelectedFile(event.target.files[0]);

    };
    
    useEffect(()=>{
      console.log('selectedFile :>> ', selectedFile);
      readFileAsDataURL(selectedFile)
      .then((B64File) => {
        setFileToShow(B64File) 
      }).catch((err) => {
        console.log('err :>> ', err);
      });
    },[selectedFile])

  return (
    <div style={{backgroundColor:"#bdbaba", padding:"10px", display: !isFlipped? "none":"flex"}}>
        <Container>
          <Row className="formRow">
            <Col>
              <Form.Group className="mb-3" controlId="phoneNameVal">
                <Form.Label>Phone name *</Form.Label>
                <Form.Control  type="text" placeholder="Phone name" onChange={e => setPhoneNameVal(e.target.value)} defaultValue={phoneNameVal} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formRow">
              <Col>
                <Form.Group className="mb-3" controlId="manufacturerVal">
                  <Form.Label>Manufacturer</Form.Label>
                  <Form.Control type="text" placeholder="Manufacturer" onChange={e => setManufacturerVal(e.target.value)} defaultValue={manufacturerVal} />
                </Form.Group>
              </Col>
          </Row>
          <Row className="formRow">
          <Col>
              <Form.Label >Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Write description here"
                  style={{ height: '100px', width:"98%" }}
                  onChange={e => setDescriptionVal(e.target.value)} defaultValue={descriptionVal} 
                />
                </Col>
          </Row>
          <Row className="formRow">
            <Col>
              <Form.Group className="mb-3" controlId="colorVal">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" placeholder="Color" defaultValue={colorVal}
                  onChange={e => setColorVal(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formRow">
              <Col>
                <Form.Group className="mb-3" controlId="priceVal">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" step={0.01} placeholder="Price" defaultValue={priceVal}
                    onChange={e => setPriceVal(e.target.value)} />
                </Form.Group>
              </Col>
          </Row>
          <Row className="formRow">
            <Col>
              <div className="imageContainer">
                <div className="fill" style={{width:"100px", height:"100px", padding:"20px"}}>
                  {fileToShow?  (<img src={fileToShow} alt="" />) : null}
                </div>
              </div>
                <Form.Group className="mb-3" controlId="fileinput">
                  <Form.Label>Upload file</Form.Label>
                  <Form.Control type="file" placeholder="Choose file" 
                    onChange={(e)=>onFileChange(e)}  />
                </Form.Group>
              </Col>
          </Row>
          <Row className="formRow">
              <Col>
                <Form.Group className="mb-3" controlId="screenVal">
                  <Form.Label>Screen</Form.Label>
                  <Form.Control type="text" placeholder="Image URL" defaultValue={screenVal}
                    onChange={e => setScreenVal(e.target.value)} />
                </Form.Group>
              </Col>
          </Row>
          <Row className="formRow">
              <Col>
                <Form.Group className="mb-3" controlId="screenVal">
                  <Form.Label>Processor</Form.Label>
                  <Form.Control type="text" placeholder="Processor" defaultValue={processorVal}
                    onChange={e => setProcessorVal(e.target.value)} />
                </Form.Group>
              </Col>
          </Row>
          <Row className="formRow">
            <Col>
                <Form.Group className="mb-3" controlId="ramVal">
                  <Form.Label>RAM</Form.Label>
                  <Form.Control type="number" placeholder="Ram" defaultValue={ramVal}
                    onChange={e => setRamVal(e.target.value)} />
                </Form.Group>
              </Col>
          </Row>
          <Row className="formRow">
            <Col className="phone-buttons-container">
              <Button variant="light" type="submit" disabled={phoneNameVal.length===0} onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="light" type="submit" onClick={cancelEdit}>
                Cancel
              </Button>
            </Col>
          </Row>
    </Container>
</div>
  );
};

export default withContext(PhoneCardEdit);
