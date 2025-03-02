import { useState } from "react";

export default function QuestionTime({ index }) {
  return (
    <>
      <span className="question-title">Question {index + 1}</span>
      <span className="timer">
        {" "}
        <img className="clock" src="src/assets/resources/clock.png"></img>
        <span>Time Left :</span>
      </span>
    </>
  );
}
