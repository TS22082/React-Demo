import React from "react";

function Entry(props) {
  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        <h5 className="card-title">{props.subject}</h5>
        <p className="card-text">{props.text}</p>
        <div className="text-center">
          <button
            onClick={() => props.deleteFromArray(props._id)}
            className="btn btn-outline-danger m-2"
            style={{ width: "200px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Entry;
