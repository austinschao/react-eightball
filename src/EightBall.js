import React, { useState } from "react";
import randIdx from "./random";
import "./EightBall.css";

/** Creating an eightball containing a message and a background color
 * Props: Answers which is an array of objects containing a message and color
 * State: [color, setColor] && [msg, setMsg]
 * Return: EightBall -> App
 */
function EightBall({ answers }) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");

  function handleClick() {
    const idx = randIdx(answers);
    setColor(answers[idx].color);
    setMsg(answers[idx].msg);
  }
  console.log(color);
  return (
    <div
      className="EightBall-div"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <p className="EightBall-p">{msg}</p>
    </div>
  );
}

export default EightBall;
