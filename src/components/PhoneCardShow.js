import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CardDetail from "./CardDetail";
import CardResume from "./CardResume";

export default function PhoneCardShow({ phone, handleClick }) {
  const [showDetail, setShowDetail] = useState(false);
 
  const width = showDetail ? "150px" : "50px";
  const height = "100%"; 
  
  const {
    id,
    phone_name,
    image_file_name,
    description,
    price,
    manufacturer
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
              <img src={image_file_name} alt="" />
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
            </div>
            <small className="text-muted">${price}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

<Card className="bg-dark text-white">
  <Card.Img src="holder.js/100px270" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>;
