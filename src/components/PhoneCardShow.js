import React, { useState } from "react";
import CardDetail from "./CardDetail";
import ButtonsComponent from "./ButtonsComponent";
export default function PhoneCardShow(props) {
  const { phone, handleRemovePhone } = props;
  const [showDetail, setShowDetail] = useState(false);
  const { id, phone_name, description, price, manufacturer, file } = phone;

  const handleDetail = () => {
    setShowDetail(!showDetail);
  };

  const showShortDescr = (text) => {
    return text.substring(0, 40) + "...";
  };

  return (
    <div className="container cardContainer">
      <div className="row">
        <div className="col mb-3 ">
          <div className="imageContainer">
            <div className="fill">
              {file ? <img src={file} alt="" /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3 ">
          <div className="card-title phone-title">{phone_name}</div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3 ">
          <div className="phone-resum-item description">
            {showDetail
              ? description
              : description.length > 99
              ? showShortDescr(description)
              : description}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3 ">
          <div className="phone-resum-item">
            <div className="descrTitle">Manufacturer:</div>
            <div>{manufacturer}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3 priceDiv">
          <div className="text-muted">${price}</div>
        </div>
      </div>
      {showDetail ? <CardDetail phone={phone} /> : null}
      <ButtonsComponent
        handleRemovePhone={handleRemovePhone}
        id={id}
        handleDetail={handleDetail}
        showDetail={showDetail}
      />
    </div>
  );
}
