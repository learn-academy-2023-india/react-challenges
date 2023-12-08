import React, {useState} from "react"
import "./App.css"

const App =  () => {
  const dice = [1, 2 ,3, 4, 5, 6]
  
  const [roll, setRoll] = useState(dice[0])
  const [rollHistory, setRollHistory] = useState([])
  const diceRoll = () => {
    const newRoll = Math.ceil(Math.random() * dice.length)
    setRoll(newRoll)
  }
 

  return (
    <>
      <h1>roll dice</h1>
      <button onClick={diceRoll}>Roll The Dice</button>
      
      <div className="window">
        <div className="dice">{roll}</div>
        <div className="rollLog">{rollHistory.join(", ")}</div>
      </div>
    </>

  )
}
export default App