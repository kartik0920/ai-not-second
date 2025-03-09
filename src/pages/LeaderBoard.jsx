import React, { useState } from "react";
import InternalNavbar from "../assets/components/InternalNavBar";
import AIorNot from "../assets/components/AIorNot";
import LeaderBoardComponent from "../assets/components/LeaderBoardComponent";
import WinnerComponent from "../assets/components/WinnerComponent";
import { supabase } from "../client";

import "../assets/styles/Home.css";
import "../assets/styles/LeaderBoard.css";
export default function LeaderBoard() {
  const [winner, setWinner] = useState([]);
  async function getRanks() {
    try {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .order("scores", { ascending: false })
        .order("last_update", { ascending: true })
        .limit(10);

      // .order("scores");

      if (error) throw error;

      if (profiles != null) {
        setWinner(profiles);
      }
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div onLoad={getRanks}>
      <InternalNavbar />
      <AIorNot />
      <div className="leader-winner-container">
        <LeaderBoardComponent winner={winner} />
        <WinnerComponent />
      </div>
    </div>
  );
}
