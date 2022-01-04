import React from "react";

export default function CardDetail({ phone }) {
  const { color, screen, processor, ram } = phone;
  return (
    <div>
      <div className="row">
        <div className="col mb-4">
          <div className="phone-resum-item">
            <div className="descrTitle">Color:</div>
            <div>{color}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-4">
          <div className="phone-resum-item">
            <div className="descrTitle">Screen:</div>
            <div>{screen}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-4">
          <div className="phone-resum-item">
            <div className="descrTitle">Processor:</div>
            <div>{processor}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-4">
          <div className="phone-resum-item">
            <div className="descrTitle">RAM:</div>
            <div>{ram}GB</div>
          </div>
        </div>
      </div>
    </div>
  );
}
