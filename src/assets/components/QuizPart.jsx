import React, { useState } from 'react'
import { quizQuestions } from './Data'
import { options } from './Data'



export default function QuizPart({setScore}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectedAnswer =(value)=>{
    console.log(value);
    setSelectedAnswer(value);
  }

  const handleNextQuestion = ()=>{
    setCurrentQuestionIndex(currentQuestionIndex+1);
    setSelectedAnswer(null);
  }

  return (
        
    <>
      <section className="game-section">
            <p>{quizQuestions[currentQuestionIndex].question}</p>
            <div className="options">
                <label>
                    <input onClick={(e)=>handleSelectedAnswer(e.target.value)} type="radio" name="ai" value="ai" className="r1" checked={selectedAnswer == "ai"}/> Yes, It's an AI
                </label>
                <label>
                    <input onClick={(e)=>handleSelectedAnswer(e.target.value)} type="radio" name="ai" value="not-ai" className="r1" checked={selectedAnswer == "not-ai"}/> It's not an AI
                </label>
            </div>
            <button onClick={handleNextQuestion} className="submit-btn">Submit <i className="fa-solid fa-arrow-right"></i></button>
        </section>
    </>
  )
}
