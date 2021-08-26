import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.click} className="btn btn-primary">
        Uppercase
      </button>
    </div>
  );
}

export default Button;
