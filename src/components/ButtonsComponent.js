import React from "react";

export default function ButtonsComponent({
  id,
  handleRemovePhone,
  handleDetail,
  showDetail,
}) {
  return (
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
  );
}
