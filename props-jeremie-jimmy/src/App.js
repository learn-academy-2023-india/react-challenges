import React, { useState } from "react"
import DiceUi from "./components/DiceUi"
import RollLogUi from "./components/RollLogUi"
import Reset from "./components/Reset"
import './App.css'

const App = () => {
  const [roll, setRoll] = useState([])

  const rollDice = () => {
    const newRoll = Math.floor(Math.random()* 6) + 1
    setRoll([...roll, newRoll])
  }
  const resetBut = () => {
    window.location.reload()
  }
  
  return (
    <>
    <div className="app">
    <h1>Try Your Luck</h1>
    <div className="button">
      <DiceUi newRoll={rollDice} />
      <Reset resButton={resetBut} />
    </div>
    <div className="dices">
    {roll.map((roll, index) => {
    return<RollLogUi name={roll} key={index} />
    })}</div>
    </div>
  </>
  )
}

export default App;
