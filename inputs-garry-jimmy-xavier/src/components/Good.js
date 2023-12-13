// Importing React library
import React from "react"
import '../App.css'
// defining component
const Good = (props) => {
    // Render
  return (
    <>
    {/* Heading for Goodbot */}
    <h3>GoodBot:</h3>
    <div className="Good">
    {/* Display input */}
      <p> {props.userInput}</p>
      </div>
    </>
  )
}
// export Good
export default Good