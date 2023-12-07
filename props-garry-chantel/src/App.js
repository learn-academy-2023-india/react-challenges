import React from "react"
import DiceBox from "./components/DiceBox"
import "./App.css"
import Rolls from "./components/Rolls"

const App = () => {
  return (
    <>
    <h1>G&C's Dice Roller</h1>
    <body>  
      <div className = "container">
      <DiceBox />
      <Rolls />
    </div> 
    </body>
    </>
   ) 
}


export default App