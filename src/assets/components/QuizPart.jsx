import React, { useState } from "react";
import { quizQuestions } from "./Data";
import { redirect, replace, useNavigate } from "react-router";

export let temp = 0;

export default function QuizPart({ handleCorrect }) {
  let navigate = useNavigate();
  let size = quizQuestions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectedAnswer = (e) => {
    let x = e.target.value;

    setSelectedAnswer(x);
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    let check = selectedAnswer === "ai";

    if (check === quizQuestions[currentQuestionIndex].answer) {
      temp = temp + 1;
    }
    console.log(temp);
    handleCorrect(temp);

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex === size - 1) {
      navigate("../leaderboard", { replace: true });
    }

    setSelectedAnswer(null);
  };

  return (
    <>
      <section className="game-section">
        <p>{quizQuestions[currentQuestionIndex].question}</p>
        <div className="options">
          <label>
            <input
              onClick={(e) => handleSelectedAnswer(e)}
              type="radio"
              name="ai"
              value="ai"
              className="r1"
              checked={selectedAnswer == "ai"}
            />{" "}
            Yes, It's an AI
          </label>
          <label>
            <input
              onClick={(e) => handleSelectedAnswer(e)}
              type="radio"
              name="ai"
              value="not-ai"
              className="r1"
              checked={selectedAnswer == "not-ai"}
            />{" "}
            It's not an AI
          </label>
        </div>
        <button onClick={handleNextQuestion} className="submit-btn">
          Submit <i className="fa-solid fa-arrow-right"></i>
        </button>
      </section>
    </>
  );
}
