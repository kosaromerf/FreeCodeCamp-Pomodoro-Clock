import React from "react";

const Timer = ({ countDown }) => {
  return (
    <div>
      <h3 id="timer-label">{countDown[2]}</h3>
      <h2 id="time-left">
        {(countDown[0] >= 10 ? countDown[0] : "0" + countDown[0]) +
          ":" +
          (countDown[1] >= 10 ? countDown[1] : "0" + countDown[1])}
      </h2>
    </div>
  );
};

export default Timer;
