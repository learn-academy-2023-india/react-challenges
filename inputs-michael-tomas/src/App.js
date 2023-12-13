import './App.css'
import GoodRobot from "./components/GoodRobot.js"
import BadRobot from "./components/BadRobot.js"
import ApologizeBot from "./components/ApologizeBot.js"
import React, { useState } from "react"
import ReverseBot from './components/ReverseBot.js'

//App that displays a robo listener and repeats the input
const App = () => {

  //use state that starts with an empty array.
  const [userInput, setUserInput] = useState("")

  //function that takes a value and hooks to the use state
  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }


  return (
    <>
    <div>
      {/* input that handles change when characters are typed */}
      <h1>Robo Listener</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      {/* <button onClick={handleClick}>Click me</button> */}
      <h4>Good Robot</h4>

      <GoodRobot userInput={userInput}/>
      <h4>Bad Robot</h4>

     <BadRobot userInput={userInput}/>

      <h4>Apologizing Robot</h4>
      <ApologizeBot userInput={userInput}/>

      <h4>Reverse-o 5000</h4>
      <ReverseBot userInput={userInput}/>
    </div>
    </>
  )
}
export default App