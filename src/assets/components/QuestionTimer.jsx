import { useState, useEffect } from "react";
import clock from "../resources/clock.png";

export default function QuestionTime({ index }) {
  const [second, setTime] = useState(30);

  useEffect(() => {
    setTime(30); // Reset timer to 30 on every render
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Dependency array is empty so it runs once per mount

  return (
    <>
      <span className="question-title">Question {index + 1}</span>
      <span className="timer">
        {" "}
        <img className="clock" src={clock}></img>
        <span>Time Left :{second}s</span>
      </span>
    </>
  );
}
