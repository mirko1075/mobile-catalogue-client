import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { withContext } from "../context/GlobalContext";

const PhoneCardEdit = props => {
  const {
    phone,
    handleClick,
    handleRemovePhone,
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
    image_file_name,
    screen,
    processor,
    ram
  } = phone;


  const [phoneNameVal, setPhoneNameVal] = useState(phone_name);
  const [manufacturerVal, setManufacturerVal] = useState(manufacturer);
  const [descriptionVal, setDescriptionVal] = useState(description);
  const [colorVal, setColorVal] = useState(color);
  const [priceVal, setPriceVal] = useState(price);
  const [image_file_name_val, setImage_file_name_val] = useState(
    image_file_name
  );
  const [screenVal, setScreenVal] = useState(screen);
  const [processorVal, setProcessorVal] = useState(processor);
  const [ramVal, setRamVal] = useState(ram);

  const handleSubmit = async e => {
    e.preventDefault();
    const phoneObj = {
      id,
      phone_name: phoneNameVal,
      manufacturer: manufacturerVal,
      description: descriptionVal,
      color: colorVal,
      price: priceVal,
      image_file_name: image_file_name_val,
      screen: screenVal,
      processor: processorVal,
      ram: ramVal
    };
    const result = await editPhone(phoneObj);
    console.log('result :>> ', result);
    setIsFlipped(!isFlipped);
  };

  const cancelEdit = () => {
    setIsFlipped(!isFlipped);
  };
  return (
   <div className="editContainer">
       <div className="editTitleDiv">
          Edit
       </div>
       <div className="editRowDiv">
          <div>
            <label htmlFor="phoneNameVal">Phone name *</label>
          </div>
          <div>
            <input
                className="input"
                type="text"
                defaultValue={phoneNameVal}
                onChange={e => setPhoneNameVal(e.target.value)}
              />
            </div>
       </div>
       <div className="editRowDiv">
          <div>
              <label htmlFor="manufacturerVal">Manufacturer</label>
          </div>
         <div>
            <input
                className="input"
                type="text"
                defaultValue={manufacturerVal}
                onChange={e => setManufacturerVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
              <label htmlFor="manufacturerVal">Manufacturer</label>
          </div>
         <div>
            <input
                className="input"
                type="text"
                defaultValue={manufacturerVal}
                onChange={e => setManufacturerVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
              <label htmlFor="descriptionVal">Description</label>
          </div>
         <div>
            <textarea
                cols={22}
                rows={5}
                className="textarea"
                defaultValue={descriptionVal}
                onChange={e => setDescriptionVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
              <label htmlFor="colorVal">Color</label>
          </div>
         <div>
            <input
                className="input"
                type="text"
                defaultValue={colorVal}
                onChange={e => setColorVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
             <label htmlFor="priceVal">Price €</label>
          </div>
         <div>
            <input
                className="input"
                type="number"
                step={0.01}
                defaultValue={priceVal}
                onChange={e => setPriceVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
              <label htmlFor="image_file_name_val">Image file URL</label>
          </div>
         <div>
              <input
                  className="input"
                  type="text"
                  defaultValue={image_file_name_val}
                  onChange={e => setImage_file_name_val(e.target.value)}
                />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
              <label htmlFor="screenVal">Screen</label>
          </div>
         <div>
            <input
                className="input"
                type="text"
                defaultValue={screenVal}
                onChange={e => setScreenVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
              <label htmlFor="processorVal">Processor</label>
          </div>
         <div>
            <input
                className="input"
                type="text"
                defaultValue={processorVal}
                onChange={e => setProcessorVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
          <div>
          <label htmlFor="ramVal">RAM</label>
          </div>
         <div>
            <input
                className="input"
                type="text"
                defaultValue={ramVal}
                onChange={e => setRamVal(e.target.value)}
              />
          </div>
       </div>
       <div className="editRowDiv">
         <div>
              <Button variant="light" type="submit" disabled={phoneNameVal.length===0} onClick={handleSubmit}>
                Submit
              </Button>
         </div>
         <div>
              <Button variant="light" type="submit" onClick={cancelEdit}>
                Cancel
              </Button>
         </div>
       </div>
   </div>
  );
};

export default withContext(PhoneCardEdit);
