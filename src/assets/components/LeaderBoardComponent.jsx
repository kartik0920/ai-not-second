import React from 'react'
import manImage from '../resources/manImage.svg'
import girlImage from '../resources/girlImage.svg'
import { rankersData } from './RankersData'
export default function 
() {
  return (
    <div className='leaderBoardComp'>
        <div className="oval oval1">
                <div className="oval oval2">

                </div>
            </div>
        <div className="headContentLeader">
                <h2 className='heading'>Leader Board</h2>
                <div className="humanImages">
                <img className='manImage' src={manImage} alt="" />
                <img className='girlImage' src={girlImage} alt="" />
                </div>

        </div>
        <div className="rankers">
                {
                    rankersData.map((team)=>(
                        <div className={`ranker ${team.rank === 1 ? "firstRank" : (team.rank === 2 ? "secondRank" : "")}`}>
                            <div className="rank">
                                {team.rank}
                            </div>
                            <div className="teamDetails">
                                <div className="team-name">{team.teamName}</div>
                                <div className="points">{team.points} points</div>
                            </div>
                        </div>
                    ))
                }
        </div>
        <div className="oval oval3">
                <div className="oval oval4">

                </div>
            </div>
    </div>
  )
}
