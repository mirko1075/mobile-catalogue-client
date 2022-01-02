import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import PhoneCardShow from "./PhoneCardShow";
import PhoneCardEdit from "./PhoneCardEdit";
const PhoneCard = ({ handleRemovePhone, phone }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <PhoneCardShow phone={phone} handleClick={handleClick} />
        <PhoneCardEdit
          phone={phone}
          handleClick={handleClick}
          handleRemovePhone={handleRemovePhone}
          setIsFlipped={setIsFlipped}
          isFlipped={isFlipped}
        />
      </ReactCardFlip>
    </div>
  );
};

export default PhoneCard;
