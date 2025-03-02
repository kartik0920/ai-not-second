import React from 'react'
import InternalNavBar from '../assets/components/InternalNavBar'
import '../assets/styles/LeaderBoard.css'
import '../assets/styles/Home.css'
import LeaderBoardComponent from '../assets/components/LeaderBoardComponent'
import AIorNot from '../assets/components/AIorNot'
import QuizPart from '../assets/components/QuizPart'
import HomeAside from '../assets/components/HomeAside'

export default function Home() {
  return (
    <>
        <InternalNavBar/>
        
        <main className='homeMain'>
          <div className="rightSideContainer">
          <AIorNot/>
          <QuizPart/>
          </div>
        
        <div className="leftSideContainer">
        <HomeAside/>
        <LeaderBoardComponent/>
        </div>
        </main>
    </>
  )
}
