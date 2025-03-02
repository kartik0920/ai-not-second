import React, { useState } from 'react'
import { quizQuestions } from './Data'
import { options } from './Data'



export default function QuizPart() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  return (
        
    <>
      <section className="game-section">
            <p>{quizQuestions[currentQuestionIndex].question}</p>
            <div className="options">
                <label>
                    <input type="radio" name="ai" value="ai" className="r1"/> Yes, It's an AI
                </label>
                <label>
                    <input type="radio" name="ai" value="not-ai" className="r1"/> It's not an AI
                </label>
            </div>
            <button onClick={()=>{setCurrentQuestionIndex(currentQuestionIndex+1)}} className="submit-btn">Submit <i className="fa-solid fa-arrow-right"></i></button>
        </section>
    </>
  )
}
