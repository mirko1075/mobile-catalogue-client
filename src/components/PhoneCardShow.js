import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CardDetail from "./CardDetail";

export default function PhoneCardShow({ phone, handleClick, handleRemovePhone }) {
  const [showDetail, setShowDetail] = useState(false);
 
  const width = showDetail ? "150px" : "50px";
  const height = "100%"; 
  
  const {
    id,
    phone_name,
    image_file_name,
    description,
    price,
    manufacturer,
    file
  } = phone;

  
  const handleDetail = () => {
    setShowDetail(!showDetail);
  };

  const showShortDescr = (text)=>{

    return text.substring(0,40)
  }

  return (
    <div className="col">
      <div className="card shadow-sm"  style={{backgroundColor:"#bdbaba", padding:"10px"}}>
        <div className="imageContainer">
          <div className="fill">
              <img src={file? file : image_file_name} alt="" />
          </div>
        </div>
        <div className="card-body">
          <Card.Title className="phone-title">{phone_name}</Card.Title>
          <div>
            <div className="phone-details"  style={{marginBottom:"2rem"}}>
              <div className="phone-resum-item">{showDetail ? description: showShortDescr(description)}...</div>
            </div>
            <div className="phone-details">
              <div className="phone-resum-item">
                <div>
                  <b>Manufacturer:</b>
                </div>
                <div>{manufacturer}</div>
              </div>
            </div>
          </div>
          {showDetail ? <CardDetail phone={phone} /> : null}
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: "10px" }}
          >
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleDetail}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleClick}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={()=>handleRemovePhone(id)}
              >
                Delete
              </button>
            </div>
            <small className="text-muted">${price}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
