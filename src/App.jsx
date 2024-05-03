import { useState, useEffect } from "react";
import TimerOptions from "./TimerOptions";
import Timer from "./Timer";
import ControlButton from "./ControlButton";
import ResetButton from "./ResetButton";

function App() {
  const [durations, setDurations] = useState([25, 5]);
  const [countDown, setCountDown] = useState([25, 0, "session"]);
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState([25, 0, "session"]);

  const audioElement = document.getElementById("beep");

  const incDecDuration = (target) => {
    switch (target.id) {
      case "session-increment":
        if (durations[0] < 60) {
          setDurations([durations[0] + 1, durations[1]]);
          if (countDown[2] == "session") {
            setCountDown([countDown[0] + 1, 0, "session"]);
            setRemaining([remaining[0] + 1, 0, "session"]);
          }
        } else {
          console.log("Timer value must be less than 60");
        }
        break;
      case "session-decrement":
        if (durations[0] > 1) {
          setDurations([durations[0] - 1, durations[1]]);
          if (countDown[2] == "session") {
            setCountDown([countDown[0] - 1, 0, "session"]);
            setRemaining([remaining[0] - 1, 0, "session"]);
          }
        } else {
          console.log("Timer value must be more than 1");
        }
        break;
      case "break-increment":
        if (durations[1] < 60) {
          setDurations([durations[0], durations[1] + 1]);
          if (countDown[2] == "break") {
            setCountDown([countDown[0] + 1, 0, "break"]);
            setRemaining([remaining[0] + 1, 0, "break"]);
          }
        } else {
          console.log("Timer value must be less than 60");
        }
        break;
      case "break-decrement":
        if (durations[1] > 1) {
          setDurations([durations[0], durations[1] - 1]);
          if (countDown[2] == "break") {
            setCountDown([countDown[0] + 1, 0, "break"]);
            setRemaining([remaining[0] + 1, 0, "break"]);
          }
        } else {
          console.log("Timer value must be more than 1");
        }
        break;
    }
  };

  const resetTimer = () => {
    setRunning(false);
    setCountDown([25, 0, "session"]);
    setDurations([25, 5]);
    setRemaining([25, 0, "session"]);
    audioElement.pause();
    audioElement.currentTime = 0;
  };

  const startTimer = (status) => {
    if (!running || (countDown[0] == 0 && countDown[1] == 0)) {
      if (remaining[0] === durations[0]) {
        if (status === "session") {
          console.log("session start");
          setCountDown([durations[0], 0, "session"]);
        } else {
          console.log("break start");
          setCountDown([durations[1], 0, "break"]);
        }
        setRunning(true);
      } else {
        console.log("not true");
        setCountDown([...remaining]);
        setRemaining([durations[0], 0, "doesntmatter"]);
        setRunning(true);
      }
    } else {
      console.log("false");
      setRunning(false);
      setRemaining([...countDown]);
    }
  };

  useEffect(() => {
    let timer;
    if (running) {
      timer = setTimeout(() => {
        if (countDown[1] === 0) {
          if (countDown[0] === 0) {
            if (countDown[2] === "session") {
              console.log("session end");
              audioElement.play();
              startTimer("break");
            } else {
              console.log("break end");
              audioElement.play();
              startTimer("session");
            }
          } else {
            setCountDown([countDown[0] - 1, 2, countDown[2]]);
          }
        } else {
          setCountDown([countDown[0], countDown[1] - 1, countDown[2]]);
        }
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [countDown, running]);

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <div id="timer-options">
        <TimerOptions
          name={"session-label"}
          duration={durations[0]}
          incDecDuration={incDecDuration}
        />
        <TimerOptions
          name={"break-label"}
          duration={durations[1]}
          incDecDuration={incDecDuration}
        />
      </div>
      <Timer countDown={countDown} />
      <div>
        <ControlButton
          name="start_stop"
          startTimer={startTimer}
          countDown={countDown[2]}
        />
        <ResetButton name="reset" resetTimer={resetTimer} />
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}

export default App;
