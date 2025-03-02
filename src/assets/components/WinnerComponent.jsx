import React from 'react'
import { winners } from './RankersData'
import circle from '../resources/circle.svg'

export default function 
() {
  return (
    <div className='WinnerComponent'>
            <img className='winnerCircle' src={circle} alt="" />
            <h1 className='winnerHead'>WINNER</h1>
           
    </div>
  )
}
