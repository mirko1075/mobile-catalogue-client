import React from 'react'
import { Button, Card } from "react-bootstrap";
export default function PhoneCardShow({phone,handleClick}) {
    const {
        id,
        phone_name,
        manufacturer,
        color,
        price,
      }= phone
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <Card style={{ width: "30rem" }} className="phone">
        <Card.Body style={mystyle}>
          <Card.Title className="phone-title">{phone_name}</Card.Title>
          <div className="phone-details">
          <div>Id: {id}</div>
          <div>Manufacturer: {manufacturer}</div>
            <div>Color: {color} </div>
            <div>Price: {price}€ </div>
          </div>
          <Button variant="light" onClick={handleClick}>
            Edit
          </Button>
        </Card.Body>
      </Card>
  
    )
}
