import React, {useState} from "react"

const Dice = (props) => {
    const [diceResult, setDiceResult] = useState("")
  
    const rollDice = () => {
      const result = Math.floor(Math.random() * 6) + 1
      setDiceResult(result)
    }
  
    return (
      <div className="diceBox" style={{ border: "10px", padding: "20px", height: "125px", width: "100px" }}>
        <h2>{props.heading}</h2>
        <div className="onClick" onClick={rollDice} style={{}}>
          {diceResult !== null && <p className="dice">{diceResult}</p>}
        </div>
      </div>
    )
  }

export default Dice

//  border: "5px solid black", padding: "5px", fontsize: "25px"  
// border: "10px", padding: "20px", height: "125px", width: "100px"