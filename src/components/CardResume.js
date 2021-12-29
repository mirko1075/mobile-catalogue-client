import React from 'react'

export default function CardResume({phone}) {
    const {
        id,
        phone_name,
        manufacturer,
        description,
        price,
      }= phone
    return (
        <div>
            <div className="phone-resume">
            <div className='phone-resum-item'><div><b>Name:</b></div><div>{phone_name}</div></div>
            <div className='phone-resum-item'><div><b>Manufacturer:</b></div><div>{manufacturer}</div></div>
            <div className='phone-resum-item'><div><b>Descr:</b></div><div>{description}</div></div>
            <div className='phone-resum-item'><div><b>Price:</b></div><div>{price}€</div></div>
          </div>
        </div>
    )
}
