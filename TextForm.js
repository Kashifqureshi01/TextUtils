import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () => {
    let text = document.getElementById("box");
    text.select();

    navigator.clipboard.writeText(text.value);
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handlechange = (event) => {
    // console.log('on chnage')
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "black" : "light" }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="box"
            rows="8"
            onChange={handlechange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>
          ConverToUpeerCase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleLoClick}>
          ConverToLowerCase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 "
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container">
        <h1>Your Text Summery</h1>
        <p>
          {text.split(" ").length - 1}words and {text.length}charcaters
        </p>
        <p>{0.08 * text.split(" ").length} you can read </p>
        <h3>Preview....</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something text to above box to preview here.."}
        </p>
      </div>
    </>
  );
}
