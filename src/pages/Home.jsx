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
import { supabase } from "../client.js";

export default function Home({ token }) {
  const id = token ? token.user.id : 0;
  let navigate = useNavigate();
  const [correct, setCorrect] = useState(score);
  const [wrong, setWrong] = useState(3);
  const [correctani, setCorrectani] = useState(false);
  const [wrongani, setWrongani] = useState(false);
  const [second, setTime] = useState(30);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [index, setIndex] = useState(0);
  const [winner, setWinner] = useState([]);

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
    setTime(10);
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

  async function updateCorrect(x) {
    try {
      const { now, e } = await supabase
        .from("profiles") // Use an existing table (it can be any table, even if you don't need to use it)
        .select("NOW()");
      if (e) throw error;
      const { error } = await supabase
        .from("profiles")
        .update({ scores: x, last_update: now })
        .eq("id", id);

      if (error) throw error;
    } catch (e) {
      alert(e.message);
    }
  }

  async function handleCorrect(x) {
    await updateCorrect(x);
    animateCorrect();
    setResetTrigger((x) => !x);
    await getRanks();
    setCorrect(x);
  }

  function handleWrong(x) {
    animateWrong();
    setResetTrigger((x) => !x);
    if (x === 0) {
      navigate("/leaderboard");
      alert("You have lost. Try again Later!!");
    }
    setWrong(x);
  }

  async function getRanks() {
    try {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .order("scores", { ascending: false })
        .order("last_update", { ascending: false })
        .limit(5);

      // .order("scores");

      if (error) throw error;

      if (profiles != null) {
        setWinner(profiles);
      }
    } catch (e) {
      alert(e);
    }
  }

  let total = quizQuestions.length;
  return (
    <div
      className={`screen ${correctani ? "green-screen" : ""} 
      ${wrongani ? "red-screen shake" : ""}`}
    >
      <InternalNavBar token={token} />
      <audio ref={audioRef} src="/wrong.mp3" />
      <main className="homeMain">
        <div className="rightSideContainer">
          <AIorNot />
          <QuestionTimer index={index} second={second} />
          <QuizPart
          second={second}
          setTime={setTime}
            handleCorrect={handleCorrect}
            handleWrong={handleWrong}
            animationcorrect={animateCorrect}
            handleIndex={handleIndex}
            getRanks={getRanks}
          />
        </div>

        <div className="leftSideContainer">
          <HomeAside
            count={correct}
            total={total}
            wrong={wrong}
            handleIndex={handleIndex}
          />
          <LeaderBoardComponent winner={winner} />
        </div>
      </main>
    </div>
  );
}
