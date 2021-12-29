import React, {useState} from 'react'
import { Button, Card } from "react-bootstrap";
import CardDetail from './CardDetail';
import CardResume from './CardResume';


export default function PhoneCardShow({phone,handleClick}) {
    console.log('phone from PhoneCardShow :>> ', phone);
    const [showDetail, setShowDetail] = useState(false)
    const {
        id,
        phone_name,
        image_file_name
      }= phone
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
console.log('image_file_name :>> ', image_file_name);
    const handleDetail = () =>{
        setShowDetail(!showDetail)
    }
    const width = showDetail? "150px" : "50px";
    const height ="100%"
    return (
        <Card className="phone">
            <Card.Body style={mystyle}>
                {image_file_name?<Card.Img className="cardImage" width={width} height={height} src={image_file_name} alt="Card image" />:null}
                    <Card.Title className="phone-title">{phone_name}</Card.Title>
                    <Card.Body>
                    <CardResume  phone={phone} />
                    {
                    showDetail?<CardDetail phone={phone} />:null
                    }
                    </Card.Body>
                    <diV className='phone-buttons-container'>
                    <Button className='button' onClick={handleDetail}>
                    {!showDetail? "Detail" : "Close"}
                    </Button>
                    <Button  variant="primary"  onClick={handleClick}>
                    Edit
                    </Button></diV>
            </Card.Body>
        </Card>
  
    )
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
</Card>