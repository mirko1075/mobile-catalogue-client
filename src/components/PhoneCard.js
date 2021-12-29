import React, {useState, useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
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

  const [isFlipped, setIsFlipped] = useState(false)
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped)
  }


  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <Card style={{ width: "18rem" }} className="phone">
      <Card.Body style={mystyle}>
        <Card.Title className="phone-title">{phone_name}</Card.Title>
        <div className="phone-details">
          <div>Manufacturer: {manufacturer}</div>
          <div>Color: {color} </div>
          <div>Price: {price}€ </div>
        </div>
        <Button variant="light" onClick={handleClick}>
          Edit
        </Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }} className="phone">
      <Card.Body style={mystyle}>
        <Card.Title className="phone-title">Edit {phone_name}</Card.Title>
        <div className="phone-details">
          <div>Manufacturer: {manufacturer}</div>
          <div>Color: {color} </div>
          <div>Price: {price}€ </div>
        </div>

        <Button variant="secondary" >
          Save
        </Button>
        <Button variant="danger" onClick={() => handleRemovePhone(id)}>
          Delete
        </Button>
        <Button variant="light" onClick={handleClick}>Cancel</Button>
      </Card.Body>
    </Card>
      </ReactCardFlip>
  );
};

export default PhoneCard;
