import React from "react";

const IncDecButton = ({ name, incDecDuration }) => {
  return (
    <button id={name} onClick={() => incDecDuration(event.target)}>
      {name}
    </button>
  );
};

export default IncDecButton;
