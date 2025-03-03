import React, { useState, useRef, useEffect } from "react";
import InternalNavBar from "../assets/components/InternalNavBar";
import "../assets/styles/LeaderBoard.css";
import "../assets/styles/Home.css";
import LeaderBoardComponent from "../assets/components/LeaderBoardComponent";
import AIorNot from "../assets/components/AIorNot";
import QuizPart from "../assets/components/QuizPart";
import HomeAside from "../assets/components/HomeAside";
import { quizQuestions } from "../assets/components/Data.js";
import { score } from "../assets/components/QuizPart";
import { useNavigate } from "react-router";
import QuestionTimer from "../assets/components/QuestionTimer.jsx";

export default function Home() {
  let navigate = useNavigate();
  const [correct, setCorrect] = useState(score);
  const [wrong, setWrong] = useState(3);
  const [correctani, setCorrectani] = useState(false);
  const [wrongani, setWrongani] = useState(false);
  const [second, setTime] = useState(30);
  const [resetTrigger, setResetTrigger] = useState(false);

  const [index, setIndex] = useState(0);

  const audioRef = useRef(null);
  const playSound = async () => {
    if (audioRef.current) {
      await audioRef.current.play();
    }
  };

  function handleIndex(e) {
    setIndex(e + 1);
  }

  useEffect(() => {
    setTime(30);
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
      // handleWrong();
    };
  }, [resetTrigger]);

  function animateCorrect() {
    setCorrectani(true);
    setTimeout(() => {
      setCorrectani(false);
    }, 700);
  }
  async function animateWrong() {
    await playSound();
    if (navigator.vibrate) {
      navigator.vibrate(1000);
    }
    setWrongani(true);
    setTimeout(() => setWrongani(false), 1000);
  }

  function handleCorrect(x) {
    animateCorrect();
    setResetTrigger((x) => !x);
    setCorrect(x);
  }

  function handleWrong(x) {
    animateWrong();
    setResetTrigger((x) => !x);
    if (x === 0) {
      navigate("/", { replace: true });
      alert("You have lost. Try again Later!!");
    }
    setWrong(x);
  }

  let total = quizQuestions.length;
  return (
    <div
      className={`screen ${correctani ? "green-screen" : ""} 
      ${wrongani ? "red-screen shake" : ""}`}
    >
      <InternalNavBar />
      <audio ref={audioRef} src="/wrong.mp3" />
      <main className="homeMain">
        <div className="rightSideContainer">
          <AIorNot />
          <QuestionTimer index={index} second={second} />
          <QuizPart
            handleCorrect={handleCorrect}
            handleWrong={handleWrong}
            animationcorrect={animateCorrect}
            handleIndex={handleIndex}
          />
        </div>

        <div className="leftSideContainer">
          <HomeAside
            count={correct}
            total={total}
            wrong={wrong}
            handleIndex={handleIndex}
          />
          <LeaderBoardComponent />
        </div>
      </main>
    </div>
  );
}
