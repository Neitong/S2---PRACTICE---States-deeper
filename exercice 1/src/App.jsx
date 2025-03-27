import React, {useState} from "react";


export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) *100}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if(score <= 3){
      scoreColor = `#e74c3c`;
    }else if(score <= 7){
      scoreColor = `#f3bc47`;
    }else{
      scoreColor = `#2ecc71`;
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  const handleScoreChange = (event) => {
    const value = Math.max(0, Math.min(10, Number(event.target.value)));
    setScore(value);
  }

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={handleScoreChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
