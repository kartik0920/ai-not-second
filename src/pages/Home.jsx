import React, { useState } from "react";
import InternalNavBar from "../assets/components/InternalNavBar";
import "../assets/styles/LeaderBoard.css";
import "../assets/styles/Home.css";
import LeaderBoardComponent from "../assets/components/LeaderBoardComponent";
import AIorNot from "../assets/components/AIorNot";
import QuizPart from "../assets/components/QuizPart";
import HomeAside from "../assets/components/HomeAside";
import { quizQuestions } from "../assets/components/Data.js";

export default function Home() {
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);

  let total = quizQuestions.length;
  return (
    <>
      <InternalNavBar />

      <main className="homeMain">
        <div className="rightSideContainer">
          <AIorNot />
          <QuizPart setScore={setScore} />
        </div>

        <div className="leftSideContainer">
          <HomeAside count={count} total={score} />
          <LeaderBoardComponent />
        </div>
      </main>
    </>
  );
}
