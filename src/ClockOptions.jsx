import React from "react";

const Clock = ({ name, duration }) => {
  return <div id={name}>{duration}</div>;
};

export default Clock;
