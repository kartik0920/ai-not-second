import React, { useState } from "react";
import { quizQuestions } from "./Data";
import { useNavigate } from "react-router";

export default function QuizPart() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    if (currentQuestionIndex < size) {
      console.log(e);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    if (currentQuestionIndex === size - 1) {
      navigate("../leaderboard", { replace: true });
    }
  }

  function toggle(e) {
    console.log(e);
  }

  let navigate = useNavigate();
  let size = quizQuestions.length;

  return (
    <>
      <section className="game-section">
        <p>{quizQuestions[currentQuestionIndex].question}</p>
        <form>
          <div className="options">
            <label>
              <input
                type="radio"
                name="ai"
                value="ai"
                className="r1"
                onClick={toggle}
              />{" "}
              Yes, It's an AI
            </label>
            <label>
              <input type="radio" name="ai" value="not-ai" className="r1" />{" "}
              It's not an AI
            </label>
          </div>
          <button type="submit" onClick={handleClick} className="submit-btn">
            Submit <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </section>
    </>
  );
}
