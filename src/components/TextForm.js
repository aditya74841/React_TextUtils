import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase Clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase");
  };


  const handleLoClick = () => {
    // console.log("LowerCase Clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase");
  };
  const handleClearClick = () => {
    
    let newtext =" ";
    setText(newtext);
    props.showAlert("Text Clear");
  };


  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
    
  };

  const handleCopy=()=>{
    
    var text = document.getElementById("myBox");
    text.select();
    
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Sucessfully");
  }

  const handleExtraSpaces = ()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
  }



  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
          Convert to LOWERCASE
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Munites Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
