import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import PhoneCardShow from "./PhoneCardShow";
import PhoneCardEdit from "./PhoneCardEdit";
const PhoneCard = ({ handleRemovePhone, phone, filterOn, setfilterOn }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  useEffect(()=>{
    setIsFlipped(false);
  },[filterOn])

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <PhoneCardShow phone={phone} handleClick={handleClick} handleRemovePhone={handleRemovePhone} />
        <PhoneCardEdit
          phone={phone}
          handleClick={handleClick}
          setIsFlipped={setIsFlipped}
          isFlipped={isFlipped}
        />
      </ReactCardFlip>
    </div>
  );
};

export default PhoneCard;
