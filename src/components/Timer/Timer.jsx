import { useState } from "react";
import "./Timer.scss";

const Timer = ({ startTime, handleGameEnd }) => {
  const [counter, setCounter] = useState(startTime);
  counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  if (counter == 0) {
    handleGameEnd();
  }

  return (
    <h1 className="timer">
      {counter}
      <span className="timer__s">s</span>
    </h1>
  );
};

export default Timer;
