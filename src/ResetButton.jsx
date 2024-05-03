import React from "react";

const ResetButton = ({ name, resetTimer }) => {
  return (
    <button id={name} onClick={() => resetTimer()}>
      {name}
    </button>
  );
};

export default ResetButton;
