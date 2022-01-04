import React, { useState } from "react";
import CardDetail from "./CardDetail";

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
    <div
      className="container"
      style={{
        backgroundColor: "#bdbaba",
        borderRadius: "10px",
        paddingTop: "20px",
        paddingBottom: "10px",
        marginBottom: "10px",
      }}
    >
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
        <div className="col mb-3" style={{ textAlign: "right" }}>
          <div className="text-muted">${price}</div>
        </div>
      </div>
      {showDetail ? <CardDetail phone={phone} /> : null}
      <div className="row">
        <div className="col  mb-4 d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={handleDetail}
          >
            {showDetail ? "Hide" : "View"}
          </button>
          <a
            href={"/PhoneEdit/" + id}
            className="btn btn-sm btn-outline-secondary"
            role="button"
            aria-pressed="true"
          >
            Edit
          </a>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => handleRemovePhone(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
