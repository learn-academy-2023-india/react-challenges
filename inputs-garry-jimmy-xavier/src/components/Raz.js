//Importing react library
import React from "react"
import '../App.css'
// Defining Raz
const Raz = (props) => {
    // function to mod the input reversing its characters
    const modInput = () => {
        return props.userInput.split("").reverse().join("")
    }
//   Render
  return (
    <>
    {/* Raz header */}
    <h3>RazBot:</h3>
    <div className="Raz">
    {/* display modded input */}
    <p>{modInput()}</p>
    </div>
    </>
  )
}
// export Raz
export default Raz