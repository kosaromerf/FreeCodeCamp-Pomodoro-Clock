import React from "react";
import IncDecButton from "./IncDecButton";
import ClockOptions from "./ClockOptions";

const TimerOptions = ({ name, duration, incDecDuration }) => {
  return (
    <div id={name}>
      {name.split("-")[0].toUpperCase()}
      <div className="incdecbtn">
        <IncDecButton
          name={name.split("-")[0] + "-increment"}
          incDecDuration={incDecDuration}
          sign={"+"}
        />
        <IncDecButton
          name={name.split("-")[0] + "-decrement"}
          incDecDuration={incDecDuration}
          sign={"-"}
        />
      </div>
      <ClockOptions name={name.split("-")[0] + "-length"} duration={duration} />
    </div>
  );
};

export default TimerOptions;
