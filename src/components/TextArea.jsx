import React, { useState } from "react";
import Button from "./Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TextArea(props) {
  const [text, setText] = useState("");
  let [boldText, setBoldText] = useState(false);
  //   let [italicText, setTtalicText] = useState(false);

  const upperCase = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const bold = () => {
    if (boldText) {
      setBoldText(false);
    } else {
      setBoldText(true);
    }
  };

  const clear = () => {
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "#0A1931",
      }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#0A1931" : "white",
            color: props.mode === "dark" ? "white" : "#0A1931",
          }}
          value={text}
          onChange={handleChange}
          className="form-control"
          id="textarea1"
          rows="5"
        ></textarea>
      </div>
      <Button click={upperCase} name="UppercCase" />
      <Button click={lowerCase} name="LowerCase" />
      <Button click={bold} name="Bold" />
      <Button click={clear} name="Clear Text" />
      <CopyToClipboard text={text}>
        <button className="btn btn-primary">
          Copy to clipboard with button
        </button>
      </CopyToClipboard>

      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#0A1931",
        }}
      >
        <h2>Your text summary</h2>
        <p>Character count: {text.length}</p>
        <p>Word count: {text.split(" ").length}</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>

        {boldText ? (
          <p style={{ fontWeight: "bold" }}>{text}</p>
        ) : (
          <p>{text.length > 0 ? text : "Enter your text to preview it here"}</p>
        )}

        {/* {italicText ? (
          <p style={{ fontStyle: "italic" }}>{text}</p>
        ) : (
          <p>{text}</p>
        )} */}

        {/* <p>{text}</p> */}
      </div>
    </div>
  );
}

export default TextArea;
