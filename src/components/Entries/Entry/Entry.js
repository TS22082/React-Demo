import React from "react";

function Entry(props) {
  return (
    <div class="card mb-4">
      <div class="card-body text-center">
        <h5 class="card-title">{props.subject}</h5>
        <p class="card-text">{props.text}</p>
        <div className="text-center">
          <button
            onClick={() => props.deleteFromArray(props._id)}
            class="btn btn-outline-danger m-2"
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
