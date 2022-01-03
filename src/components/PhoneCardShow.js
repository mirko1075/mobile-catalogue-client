import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
    file,
  } = phone;

  
  const handleDetail = () => {
    setShowDetail(!showDetail);
  };

  const showShortDescr = (text)=>{

    return text.substring(0,100)+"..."
  }

  return (
    <div style={{ padding:"10px"}}>
        <div slassName="container" style={{backgroundColor:"#bdbaba", borderRadius:"10px", paddingTop:"10px", paddingBottom:"10px"}}>
        <div className="imageContainer">
          <div className="fill">
          {file?  (<img src={file} alt="" />) : null}
          </div>
        </div>
        <div className="card-body">
          <div className=" card-title phone-title">{phone_name}</div>
          <div>
            <div className="phone-details"  style={{marginBottom:"2rem", height:"5em"}}>
              <div className="phone-resum-item">{showDetail ? description : description.length > 99 ?  showShortDescr(description) : description}</div>
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
            style={{ marginTop: "10px"}}
          >
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleDetail}
              >
               {
                showDetail ?  "Hide" :"View"
               } 
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
