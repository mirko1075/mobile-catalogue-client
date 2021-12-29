import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
const PhoneCard = (props) => {
console.log(`props`, props)
const {
    handleRemovePhone,
    phone
  }= props;
  const {
    id,
    phone_name,
    manufacturer,
    color,
    price,
  }= phone
  const history = useNavigate();

  return (
    <Card style={{ width: "18rem" }} className="phone">
      <Card.Body style={mystyle}>
        <Card.Title className="phone-title">{phone_name}</Card.Title>
        <div className="phone-details">
          <div>Manufacturer: {manufacturer}</div>
          <div>Color: {color} </div>
          <div>Price: {price}€ </div>
        </div>
        <Button variant="light" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemovePhone(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PhoneCard;
