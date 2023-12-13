// Importing all necessary dependencies, components, and styles.
import React, { useState } from "react"
import './App.css'
import Good from "./components/Good.js"
import Bad from "./components/Bad.js"
import Raz from "./components/Raz.js"
import Our from "./components/Our.js"


//Main App components
const App = () => {
  //useState hook creating a state variable called userInput
  const [userInput, setUserInput] = useState("")//Empty string for the initial state
  //Event handler funstion updates userInput when typing in type field
  const handleInput = (event) => {
    setUserInput(event.target.value)
  }
//Render
  return (
    <>
    {/* Header */}
    <div className="app">
      <h1>Greeter App</h1>
      {/* Input type field with OnChange event to trigger handleInput */}
      
      <input className="input"onChange={handleInput} placeholder="Type something ..." />
     
{/* robotz header */}
      <div className="robotz">
      <Good userInput={userInput} />
      <Bad userInput={userInput} />
      <Raz userInput={userInput} />
      <Our userInput={userInput} />
      </div>
    </div>
    </>
  )
}

// export App
export default App
