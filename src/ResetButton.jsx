import React from "react";

const ResetButton = ({ name, resetTimer }) => {
  return (
    <button id={name} onClick={() => resetTimer()}>
      {"Reset"}
    </button>
  );
};

export default ResetButton;
