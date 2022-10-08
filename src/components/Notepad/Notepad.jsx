import React, { useEffect, useRef, useState } from "react";
import "./notepad.css";
import HeadSection from "../HeadSection/HeadSection";
import notepad from "../../assets/notepad.png";

const Notepad = () => {
  const[textareaWidth, setTextareaWidth] = useState('700px')
  const textAreaRef = useRef(null)

  const handleChange = (event) => {
    console.log(textAreaRef)
  };
  return (
    <section className="notepad-main start-shadow">
      <HeadSection
        width={textareaWidth}
        title="Untitled - Notepad"
        icon={notepad}
      />
      <ul className="notepad-menu">
        <li>File</li>
        <li>Edit</li>
        <li>Search</li>
        <li>Help</li>
      </ul>
      <textarea
        id="textbox"
        ref={textAreaRef}
        className="notepad-textarea"
        style={{ width: textareaWidth, height: "500px" }}
        onMouseDown={handleChange}
      ></textarea>
    </section>
  );
};

export default Notepad;
