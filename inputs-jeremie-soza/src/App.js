import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import BigBrother from './components/BigBrother'
import Antihero from './components/Antihero' 
import "./App.css"

const App = () => {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
    <div className="app-container"> 
      <h1>Robo Active Listening</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      <h2>Good Robot</h2>
      <GoodRobot userInput={userInput} />
      <h2>Bad Robot</h2>
      <BadRobot userInput={userInput} />
      <h2>Big Brother</h2>
      <BigBrother userInput={userInput} />
      <h2>Antihero Robot</h2>
      <Antihero userInput={userInput} />
    </div>
    </>
  )
}

export default App
