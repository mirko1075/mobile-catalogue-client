import React, { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { withContext } from "../context/GlobalContext";
import {readFileAsDataURL} from "../helpers/functions"

const PhoneEdit = (props) => {
  const {getPhone, editPhone} = props;
  let navigate = useNavigate();
  const { id } = useParams()
  const [phoneNameVal, setPhoneNameVal] = useState("");
  const [manufacturerVal, setManufacturerVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [screenVal, setScreenVal] = useState("");
  const [processorVal, setProcessorVal] = useState("");
  const [ramVal, setRamVal] = useState("");
  const [selectedFile, setSelectedFile]=useState("")
  const [fileToShow, setFileToShow] = useState("")
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(false);

  const loadData = async () => {
    const phone = await getPhone(id);
    console.log('phone :>> ', phone);
    await setPhoneNameVal(phone.phone_name);
    console.log('phoneNameVal :>> ', phoneNameVal);
    await setManufacturerVal(phone.manufacturer);
    await setDescriptionVal(phone.description);
    await setColorVal(phone.color);
    await setPriceVal(phone.price);
    await setScreenVal(phone.screen);
    await setProcessorVal(phone.processor);
    await setRamVal(phone.ram);
    setFileToShow(phone.file)
  }

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
    result? setSaved(true) : setError(true)
  };

  const cancelEdit = () =>{
    navigate("/");
  }
  // On file select (from the pop up)
  const onFileChange =  (event) => {
      // Update the state
    setSelectedFile(event.target.files[0]);

  };
  
  useEffect(()=>{
    if (!selectedFile) return;
    console.log('selectedFile :>> ', selectedFile);
    readFileAsDataURL(selectedFile)
    .then((B64File) => {
      setFileToShow(B64File) 
    }).catch((err) => {
      console.log('err :>> ', err);
    });
  },[selectedFile])

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{marginTop:"25px", padding:"10px"}}>
    <Container style={{backgroundColor:"#bdbaba", borderRadius:"10px", paddingTop:"10px", paddingBottom:"10px"}}>
      <Row className="formRow mb-5 mt-5">
        <Col><b>EDIT PHONE</b></Col>
      </Row>
      <Row className="formRow">
        <Col>
          <Form.Group className="mb-3" controlId="phoneNameVal">
            <Form.Label>Phone name *</Form.Label>
            <Form.Control disabled={saved}  type="text" placeholder="Phone name" onChange={e => setPhoneNameVal(e.target.value)} defaultValue={phoneNameVal} />
          </Form.Group>
        </Col>
      </Row>
      <Row className="formRow">
          <Col>
            <Form.Group className="mb-3" controlId="manufacturerVal">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control disabled={saved} type="text" placeholder="Manufacturer" onChange={e => setManufacturerVal(e.target.value)} defaultValue={manufacturerVal} />
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
            <Form.Control disabled={saved} type="text" placeholder="Color" defaultValue={colorVal}
              onChange={e => setColorVal(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Row className="formRow">
          <Col>
            <Form.Group className="mb-3" controlId="priceVal">
              <Form.Label>Price</Form.Label>
              <Form.Control disabled={saved} type="number" step={0.01} placeholder="Price" defaultValue={priceVal}
                onChange={e => setPriceVal(e.target.value)} />
            </Form.Group>
          </Col>
      </Row>
      <Row className="formRow">
        <Col>
          <div className="imageContainer">
            <div className="fill" style={{width:"100px", height:"100px", padding:"20px", border:"1px solid grey"}}>
              {fileToShow?  (<img src={fileToShow} alt="" />) : "Image preview"}
            </div>
          </div>
            <Form.Group className="mb-3" controlId="fileinput">
              <Form.Label>Upload file</Form.Label>
              <Form.Control disabled={saved} type="file" placeholder="Choose file" 
                onChange={(e)=>onFileChange(e)}  />
            </Form.Group>
          </Col>
      </Row>
      <Row className="formRow">
          <Col>
            <Form.Group className="mb-3" controlId="screenVal">
              <Form.Label>Screen</Form.Label>
              <Form.Control disabled={saved} type="text" placeholder="Image URL" defaultValue={screenVal}
                onChange={e => setScreenVal(e.target.value)} />
            </Form.Group>
          </Col>
      </Row>
      <Row className="formRow">
          <Col>
            <Form.Group className="mb-3" controlId="screenVal">
              <Form.Label>Processor</Form.Label>
              <Form.Control disabled={saved} type="text" placeholder="Processor" defaultValue={processorVal}
                onChange={e => setProcessorVal(e.target.value)} />
            </Form.Group>
          </Col>
      </Row>
      <Row className="formRow">
        <Col>
            <Form.Group className="mb-3" controlId="ramVal">
              <Form.Label>RAM</Form.Label>
              <Form.Control disabled={saved} type="number" placeholder="Ram" defaultValue={ramVal}
                onChange={e => setRamVal(e.target.value)} />
            </Form.Group>
          </Col>
      </Row>
      {saved?
      <>
      <Row className="formRow mb-3">
        <Col className="phone-buttons-container">
          <div class="alert alert-success" role="alert">
            Phone saved
          </div>
        </Col>
      </Row>
      <Row className="formRow">
        <Col className="phone-buttons-container">
          <Button variant="light" type="submit" disabled={phoneNameVal?.length===0} onClick={cancelEdit}>
            Close
          </Button>
        </Col>
      </Row>
      </>
      :
      error?
      <Row className="formRow mb-3">
        <Col className="phone-buttons-container">
          <div class="alert alert-success" role="alert">
            Phone saved
          </div>
        </Col>
      </Row>
      :    
      <Row className="formRow">
        <Col className="phone-buttons-container">
          <Button variant="light" type="submit" disabled={phoneNameVal?.length===0} onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="light" type="submit" onClick={cancelEdit}>
            Cancel
          </Button>
        </Col>
      </Row>
      }
  </Container>
  </div>
)}

export default withContext(PhoneEdit);
