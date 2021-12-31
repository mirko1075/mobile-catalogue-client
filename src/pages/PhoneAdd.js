import React, {  useState , useRef} from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { withContext } from "../context/GlobalContext";
import CardDetail from "../components/CardDetail";

import {getBase64} from "../helpers/functions"

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
  const [selectedFile, setSelectedFile]=useState("")
  const [selectedFileB64, setSelectedFileB64]=useState("")
  const inputRef = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    let B64File="";
    if (selectedFile) B64File= getBase64(selectedFile)
    
    const phoneObj = {
      phone_name: phoneNameVal,
      manufacturer: manufacturerVal,
      description: descriptionVal,
      color: colorVal,
      price: priceVal,
      image_file_name: image_file_name_val,
      screen: screenVal,
      processor: processorVal,
      ram: ramVal,
      B64File:B64File
    };
    const result = await addPhone(phoneObj);
    if (result.data) {
      setCreatedPhone(result.data);
      setIsCreated(true);
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

  const handleUpload = () => {
    inputRef.current?.click();
  };
  
  // On file select (from the pop up)
  const onFileChange = event => {
  console.log('inputRef :>> ', inputRef.current);
    // Update the state
   setSelectedFile(event.target.files[0]);
  
  };
  
  // On file upload (click the upload button)
  const onFileUpload = () => {
  
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(selectedFile);
  
    // Request made to the backend api
    // Send formData object
    //axios.post("api/uploadfile", formData);
  };
  
  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
  
    if (selectedFile) {
       
      return (
        <Row>
          <Col> 
            <div>
                  <p>File Name: {selectedFile.name}</p>
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col> 
              <div>
                <br />
                <h4>Choose file</h4>
              </div>
          </Col>
        </Row>
      );
    }
  };



  return !isCreated ? (
    <div className="container" style={{padding:"15px"}}>
         
      <Card style={{backgroundColor:"#bdbaba", boxShadow:"none", WebkitBoxShadow:"none"}}>
        <Card.Body >
          <Form>
          <Row>
            <Col>
              <div  style={{width:"100%", textAlign:"center",backgroundColor:"#bdbaba"}}>Phone Add</div>
            </Col>
          </Row>
            <Row>
              <Col className="formRowAddText">
                <label htmlFor="phoneNameVal">Phone name *</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="text"
                  value={phoneNameVal}
                  onChange={e => setPhoneNameVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
            <Col className="formRowAddText">
                <label htmlFor="manufacturerVal">Manufacturer</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="text"
                  value={manufacturerVal}
                  onChange={e => setManufacturerVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="formRowAddField"> 
                <label htmlFor="descriptionVal">Description</label>
              </Col>
              <Col className="formRowAddField"> 
                <textarea
                  cols={22}
                  rows={5}
                  className="form-control"
                  value={descriptionVal}
                  onChange={e => setDescriptionVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="formRowAddField"> 
                <label htmlFor="colorVal">Color</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="text"
                  value={colorVal}
                  onChange={e => setColorVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ flexDirection: "row" }}>
              <Col className="formRowAddField"> 
                <label htmlFor="priceVal">Price €</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="number"
                  step={0.01}
                  value={priceVal}
                  onChange={e => setPriceVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="formRowAddField"> 
                <label htmlFor="image_file_name_val">Image file URL</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="text"
                  value={image_file_name_val}
                  onChange={e => setImage_file_name_val(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col> 
                <div className="mx-3" style={{marginTop:"5p", marginBottom:"5px", textAlign:"center"}}>
                  <label htmlFor="fileinput"  className="form-label">Upload file</label>
                  <input id="fileinput" onChange={onFileChange}  className="form-control" type="file" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="formRowAddField"> 
                <label htmlFor="screenVal">Screen</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="text"
                  value={screenVal}
                  onChange={e => setScreenVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="formRowAddField"> 
                <label htmlFor="processorVal">Processor</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="text"
                  value={processorVal}
                  onChange={e => setProcessorVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="formRowAddField"> 
                <label htmlFor="ramVal">RAM</label>
              </Col>
              <Col className="formRowAddField"> 
                <input
                  className="inputAdd"
                  type="text"
                  value={ramVal}
                  onChange={e => setRamVal(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="phone-buttons-container">
                <Button variant="light"  disabled={phoneNameVal.length===0}  type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="light" type="submit" onClick={resetForm}>
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
        </Card>
    </div>
  ) : (

    <CardDetail phone={createdPhone} />

  );

};

export default withContext(PhoneAdd);
