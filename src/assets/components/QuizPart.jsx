import React, { useState } from "react";
import { quizQuestions } from "./Data";
import { useNavigate } from "react-router";

export let score = 0;
export let lives = 3;

export default function QuizPart({ handleCorrect, handleWrong, handleIndex }) {
  let navigate = useNavigate();
  let size = quizQuestions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectedAnswer = (e) => {
    let x = e.target.value;

    setSelectedAnswer(x);
  };

  const handleNextQuestion = async (e) => {
    e.preventDefault();
    let check = selectedAnswer === "ai";

    if (check === quizQuestions[currentQuestionIndex].answer) {
      score = score + 1;
      handleCorrect(score);
    } else {
      lives--;
      handleWrong(lives);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex === size - 1) {
      navigate("../leaderboard", { replace: true });
    }
    handleIndex(currentQuestionIndex);
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
