import React, { useState } from "react";
import InternalNavBar from "../assets/components/InternalNavBar";
import "../assets/styles/LeaderBoard.css";
import "../assets/styles/Home.css";
import LeaderBoardComponent from "../assets/components/LeaderBoardComponent";
import AIorNot from "../assets/components/AIorNot";
import QuizPart from "../assets/components/QuizPart";
import HomeAside from "../assets/components/HomeAside";
import { quizQuestions } from "../assets/components/Data.js";
import { temp } from "../assets/components/QuizPart";
export default function Home() {
  const [correct, setCorrect] = useState(temp);
  function handleCorrect(x) {
    setCorrect(x);
  }
  let total = quizQuestions.length;
  return (
    <>
      <InternalNavBar />

      <main className="homeMain">
        <div className="rightSideContainer">
          <AIorNot />
          <QuizPart handleCorrect={handleCorrect} />
        </div>

        <div className="leftSideContainer">
          <HomeAside count={correct} total={total} />
          <LeaderBoardComponent />
        </div>
      </main>
    </>
  );
}
