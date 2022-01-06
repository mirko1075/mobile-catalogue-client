import React from 'react'
import { Button } from "react-bootstrap";

export default function NofileFound({functionLink, buttonText}) {
  return (
    <div className="no-data">
    <div>
      <div>No phone found</div>
      <div>
        <Button
          variant="outline-dark"
          type="submit"
          onClick={functionLink}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  </div>
  )
}
