import React, { useEffect, useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { withContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { readFileAsDataURL } from "../helpers/functions";

const PhoneAdd = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addPhone } = props;
  const [phoneNameVal, setPhoneNameVal] = useState("");
  const [manufacturerVal, setManufacturerVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [screenVal, setScreenVal] = useState("");
  const [processorVal, setProcessorVal] = useState("");
  const [ramVal, setRamVal] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [createdPhone, setCreatedPhone] = useState({});
  const [isCreated, setIsCreated] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [fileToShow, setFileToShow] = useState("");

  const inputRef = useRef(null);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let B64File = "";
    try {
      if (selectedFile) {
          B64File = await readFileAsDataURL(selectedFile);        
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
        B64File: B64File,
      };
      const result = await addPhone(phoneObj);
      if (result.data) {
        setCreatedPhone(result.data);
        setIsCreated(true);
        navigate("/PhonesList");
      }
    } catch (error) {
      console.log('error :>> ', error);
      return;
    }
  };

  const resetForm = () => {
    setPhoneNameVal("");
    setManufacturerVal("");
    setDescriptionVal("");
    setColorVal("");
    setPriceVal(0);
    setScreenVal("");
    setProcessorVal(0);
    setRamVal("");
    setFileToShow("");
  };

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) return;
    readFileAsDataURL(selectedFile)
      .then((B64File) => {
        setFileToShow(B64File);
      })
      .catch((err) => {
        console.log("err reading file :>> ", err);
      });
  }, [selectedFile]);

  return !isCreated ? (
    <div className="addEditContainer">
      <div className="container addEditCard">
        <div className="row formRow mb-5 mt-5">
          <div className="col">
            <b>ADD PHONE</b>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Group className="mb-3" controlId="phoneNameVal">
              <Form.Label>Phone name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone name"
                onChange={(e) => setPhoneNameVal(e.target.value)}
                defaultValue={phoneNameVal}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Group className="mb-3" controlId="manufacturerVal">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Manufacturer"
                onChange={(e) => setManufacturerVal(e.target.value)}
                defaultValue={manufacturerVal}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write description here"
              className="textArea"
              onChange={(e) => setDescriptionVal(e.target.value)}
              defaultValue={descriptionVal}
            />
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Group className="mb-3" controlId="colorVal">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                defaultValue={colorVal}
                onChange={(e) => setColorVal(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Group className="mb-3" controlId="priceVal">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step={0.01}
                placeholder="Price"
                defaultValue={priceVal}
                onChange={(e) => setPriceVal(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <div className="imageContainer">
              <div className="fill">
                {fileToShow ? <img src={fileToShow} alt="" /> : "Image preview"}
              </div>
            </div>
            <Form.Group className="mb-3" controlId="fileinput">
              <Form.Label>Upload file</Form.Label>
              <Form.Control
                type="file"
                placeholder="Choose file"
                onChange={(e) => onFileChange(e)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Group className="mb-3" controlId="screenVal">
              <Form.Label>Screen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Screen"
                defaultValue={screenVal}
                onChange={(e) => setScreenVal(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Group className="mb-3" controlId="screenVal">
              <Form.Label>Processor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Processor"
                defaultValue={processorVal}
                onChange={(e) => setProcessorVal(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col">
            <Form.Group className="mb-3" controlId="ramVal">
              <Form.Label>RAM</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ram"
                defaultValue={ramVal}
                onChange={(e) => setRamVal(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row formRow">
          <div className="col phone-buttons-container">
            <Button
              variant="light"
              disabled={phoneNameVal.length === 0}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button variant="light" type="submit" onClick={resetForm}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Phone created</div>
  );
};

export default withContext(PhoneAdd);
