import React from "react";

const IncDecButton = ({ name, incDecDuration, sign }) => {
  return (
    <button id={name} onClick={() => incDecDuration(event.target)}>
      {sign}
    </button>
  );
};

export default IncDecButton;
