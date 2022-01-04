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
    return text.substring(0, 100) + "...";
  };

  return (
    <div style={{ padding: "10px" }}>
      <div
        className="container"
        style={{
          backgroundColor: "#bdbaba",
          borderRadius: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div className="row">
          <div className="col">
            <div className="imageContainer">
              <div className="fill">
                {file ? <img src={file} alt="" /> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className=" card-title phone-title">{phone_name}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="phone-resum-item">
              {showDetail
                ? description
                : description.length > 99
                ? showShortDescr(description)
                : description}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
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
          <div className="row">
            <div
              className="col d-flex cardButtonsContainer"
              style={{ marginTop: "10px" }}
            >
              <div className="btn-group">
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
              <div>
                <span className="text-muted">${price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
