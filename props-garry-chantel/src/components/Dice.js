import React, {useState} from "react"

const Dice = (props) => {
    const [diceResult, setDiceResult] = useState(null)
  
    const rollDice = () => {
      const result = Math.floor(Math.random() * 6) + 1
      setDiceResult(result)
    }
  
    return (
      <div className="diceBox" style={{ border: "2px", padding: "5px", height: "100px", width: "100px"}}>
        <h2>{props.heading}</h2>
        <div onClick={rollDice} style={{ cursor: "pointer", border: "px solid black", padding: "10px" }}>
          {/* Your content goes here */}
          {diceResult !== null && <p>Result: {diceResult}</p>}
        </div>
      </div>
    )
  }

export default Dice