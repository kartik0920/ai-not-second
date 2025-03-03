import clock from "../resources/clock.png";

export default function QuestionTime({ index, second }) {
  // Dependency array is empty so it runs once per mount

  return (
    <div id={index} style={{ display: "flex", alignItems: "center" }}>
      <span id="{index}" className="question-title">
        Question {index + 1}
      </span>
      <span className="timer">
        {" "}
        <img className="clock" src={clock}></img>
        <span>Time Left :{second}s</span>
      </span>
    </div>
  );
}
