import React, { useEffect, useState , useRef} from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { withContext } from "../context/GlobalContext";
import CardDetail from "../components/CardDetail";
import { useNavigate } from "react-router-dom";
import {readFileAsDataURL} from "../helpers/functions"

const PhoneAdd = ({ addPhone }) => {
  const [phoneNameVal, setPhoneNameVal] = useState("");
  const [manufacturerVal, setManufacturerVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [image_file_name_val, setImage_file_name_val] = useState("");
  const [screenVal, setScreenVal] = useState("");
  const [processorVal, setProcessorVal] = useState("");
  const [ramVal, setRamVal] = useState("");
  const [createdPhone, setCreatedPhone] = useState({});
  const [isCreated, setIsCreated] = useState(false);
  const [selectedFile, setSelectedFile]=useState("");
  const [fileToShow, setFileToShow] = useState("")

  const inputRef = useRef(null);
  let navigate = useNavigate();


  const handleSubmit = async e => {
    e.preventDefault();
    let B64File="";
    if (selectedFile){ 
      B64File= await readFileAsDataURL(selectedFile)
      console.log('B64File :>> ', B64File);
    }
    
    const phoneObj = {
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
    const result = await addPhone(phoneObj);
    if (result.data) {
      setCreatedPhone(result.data);
      setIsCreated(true);
      navigate("/PhonesList");
    } else {
    }
  };

  const resetForm = () => {
    setPhoneNameVal("");
    setManufacturerVal("");
    setDescriptionVal("");
    setColorVal("");
    setPriceVal(0);
    setImage_file_name_val("");
    setScreenVal("");
    setProcessorVal(0);
    setRamVal("");
  };


  
  // On file select (from the pop up)
  const onFileChange = event => {
  console.log('inputRef :>> ', inputRef.current);
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

  return !isCreated ? (
    <div style={{marginTop:"25px", padding:"10px"}}>
    <Container style={{backgroundColor:"#bdbaba", borderRadius:"10px", paddingTop:"10px", paddingBottom:"10px"}}>
        <Row className="formRow mb-5 mt-5">
            <Col><b>ADD PHONE</b></Col>
        </Row>
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
                  <div className="fill" style={{width:"100px", height:"100px", padding:"20px", border:"1px solid grey"}}>
                    {fileToShow?  (<img src={fileToShow} alt="" />) : "Image preview"}
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
                  <Form.Control type="text" placeholder="Screen" defaultValue={screenVal}
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
                <Button variant="light"  disabled={phoneNameVal.length===0}  type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="light" type="submit" onClick={resetForm}>
                  Reset
                </Button>
              </Col>
          </Row>
      </Container>
      </div>
  ) : (

    <div>Phone created</div>

  );

};

export default withContext(PhoneAdd);
