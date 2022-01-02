import React from "react";

export default function CardDetail({ phone }) {
  const { color, screen, processor, ram } = phone;
  return (
    <div>
      <div className="phone-details">
        <div className="phone-resum-item">
          <div>
            <b>Color:</b>
          </div>
          <div>{color}</div>
        </div>
        <div className="phone-resum-item">
          <div>
            <b>Screen:</b>
          </div>
          <div>{screen}€ </div>
        </div>
        <div className="phone-resum-item">
          <div>
            <b>Processor:</b>
          </div>
          <div>{processor}€</div>
        </div>
        <div className="phone-resum-item">
          <div>
            <b>RAM:</b>
          </div>
          <div>{ram}MHz </div>
        </div>
      </div>
    </div>
  );
}
