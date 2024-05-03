import React from "react";

const ControlButton = ({ name, startTimer, countDown }) => {
  return (
    <button id={name} onClick={() => startTimer(countDown)}>
      {"Start/Pause"}
    </button>
  );
};

export default ControlButton;
