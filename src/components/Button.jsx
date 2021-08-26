import React from "react";

function Button(props) {
  return (
    <div className="mb-3">
      <button onClick={props.click} className="btn btn-primary">
        {props.name}
      </button>
    </div>
  );
}

export default Button;
