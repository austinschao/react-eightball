import React, { useState } from "react";
import randIdx from "./random";
import "./EightBall.css";

/** Eightball shows a random message with a background color and changes with
 * each click.
 *
 * Props: Answers which is an array of objects containing a message and color
 * State: [color, setColor] && [msg, setMsg]
 *
 */

function EightBall({ answers }) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");
  // convert to an obj to hold both values of color and msg

  function handleClick() {
    const idx = randIdx(answers);
    setColor(answers[idx].color);
    setMsg(answers[idx].msg);
  }

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
