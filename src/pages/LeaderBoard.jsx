import React from 'react'
import InternalNavbar from '../assets/components/InternalNavBar'
import AIorNot from '../assets/components/AIorNot'
import LeaderBoardComponent from '../assets/components/LeaderBoardComponent'
import WinnerComponent from '../assets/components/WinnerComponent'
import '../assets/styles/Home.css'
import '../assets/styles/LeaderBoard.css'
export default function LeaderBoard() {
  return (
    <div>
        <InternalNavbar/>
        <AIorNot/>
        <div className="leader-winner-container">
            <LeaderBoardComponent/>
            <WinnerComponent/>
        </div>
    </div>
  )
}
