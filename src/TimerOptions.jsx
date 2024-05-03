import React from "react";
import IncDecButton from "./IncDecButton";
import ClockOptions from "./ClockOptions";

const TimerOptions = ({ name, duration, incDecDuration }) => {
  return (
    <div id={name}>
      {name.replace("-", " ").toUpperCase()}
      <div>
        <IncDecButton
          name={name.split("-")[0] + "-increment"}
          incDecDuration={incDecDuration}
        />
        <IncDecButton
          name={name.split("-")[0] + "-decrement"}
          incDecDuration={incDecDuration}
        />
        <ClockOptions
          name={name.split("-")[0] + "-length"}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default TimerOptions;
