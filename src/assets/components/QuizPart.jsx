import React, { useState } from "react";
import { quizQuestions } from "./Data";
import { options } from "./Data";
import { replace, useNavigate } from "react-router";

export default function QuizPart() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let navigate = useNavigate();
  let size = quizQuestions.length;
  return (
    <>
      <section className="game-section">
        <p>{quizQuestions[currentQuestionIndex].question}</p>
        <div className="options">
          <label>
            <input type="radio" name="ai" value="ai" className="r1" /> Yes, It's
            an AI
          </label>
          <label>
            <input type="radio" name="ai" value="not-ai" className="r1" /> It's
            not an AI
          </label>
        </div>
        <button
          onClick={() => {
            if (currentQuestionIndex < size)
              setCurrentQuestionIndex(currentQuestionIndex + 1);

            if (currentQuestionIndex === size - 1) {
              navigate("../leaderboard", { replace: true });
            }
          }}
          className="submit-btn"
        >
          Submit <i className="fa-solid fa-arrow-right"></i>
        </button>
      </section>
    </>
  );
}
