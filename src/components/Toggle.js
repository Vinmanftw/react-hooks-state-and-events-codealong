import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick(){ //sets up the click handler, which is the callback function that will update the state using setIsOn
    setIsOn((isOn) => !isOn); 
  }
  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
      </button>
  );
}

export default Toggle;
