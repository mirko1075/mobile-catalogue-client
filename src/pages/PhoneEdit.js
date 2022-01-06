import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { withContext } from "../context/GlobalContext";
import { readFileAsDataURL } from "../helpers/functions";
import NofileFound from "../components/NofileFound";

const PhoneEdit = (props) => {
  const { getPhone, editPhone } = props;
  let navigate = useNavigate();
  const { id } = useParams();
  const [phone, setPhone] = useState({});
  const [phoneNameVal, setPhoneNameVal] = useState("");
  const [manufacturerVal, setManufacturerVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [screenVal, setScreenVal] = useState("");
  const [processorVal, setProcessorVal] = useState("");
  const [ramVal, setRamVal] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [fileToShow, setFileToShow] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(false);

  const loadData = async () => {
    const phoneObj = await getPhone(id);
    if (!phoneObj) return;
    await setPhone(phoneObj);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let B64File = "";
    if (selectedFile) {
      B64File = await readFileAsDataURL(selectedFile);
      console.log("B64File :>> ", B64File);
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
      B64File: B64File,
    };
    const result = await editPhone(phoneObj);
    result ? setSaved(true) : setError(true);
  };

  const cancelEdit = () => {
    navigate("/");
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
        setError(err)
      });
  }, [selectedFile]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setPhoneNameVal(phone.phone_name);
    setManufacturerVal(phone.manufacturer);
    setDescriptionVal(phone.description);
    setColorVal(phone.color);
    setPriceVal(phone.price);
    setScreenVal(phone.screen);
    setProcessorVal(phone.processor);
    setRamVal(phone.ram);
    setFileToShow(phone.file);
  }, [phone])
  return (
    phone && !Object.keys(phone).length
    ? 
      <NofileFound functionLink={()=>navigate("/")} />
    :
      <div className="addEditContainer">
        <div className="container addEditCard">
          <div className="row formRow mb-5 mt-5">
            <div className="col">
              <b>EDIT PHONE</b>
            </div>
          </div>
          <div className="row formRow">
            <div className="col">
              <Form.Group className="mb-3" controlId="phoneNameVal">
                <Form.Label>Phone name *</Form.Label>
                <Form.Control
                  disabled={saved}
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
                  disabled={saved}
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
                  disabled={saved}
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
                  disabled={saved}
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
                  disabled={saved}
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
                  disabled={saved}
                  type="text"
                  placeholder="Image URL"
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
                  disabled={saved}
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
                  disabled={saved}
                  type="number"
                  placeholder="Ram"
                  defaultValue={ramVal}
                  onChange={(e) => setRamVal(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
          {saved ? (
            <>
              <div className="row formRow mb-3">
                <div className="col phone-buttons-container">
                  <div className="alert alert-success" role="alert">
                    Phone saved
                  </div>
                </div>
              </div>
              <div className="row formRow">
                <div className="col phone-buttons-container">
                  <Button
                    variant="light"
                    type="submit"
                    disabled={phoneNameVal?.length === 0}
                    onClick={cancelEdit}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          ) : error ? (
            <div className="row formRow mb-3">
              <div className="col phone-buttons-container">
                <div className="alert alert-success" role="alert">
                  Phone saved
                </div>
              </div>
            </div>
          ) : (
            <div className="row formRow">
              <div className="col phone-buttons-container">
                <Button
                  variant="light"
                  type="submit"
                  disabled={phoneNameVal?.length === 0}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button variant="light" type="submit" onClick={cancelEdit}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default withContext(PhoneEdit);
