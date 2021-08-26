import React, { useState } from "react";
import Button from "./Button";

function TextArea(props) {
  const [text, setText] = useState("Enter your text...");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <Button name="UppercCase" />
      <Button name="LowerCase" />
      <Button name="Bold" />
      <Button name="Italic" />
    </div>
  );
}

export default TextArea;
