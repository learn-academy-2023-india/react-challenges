// Importing React library
import React from "react"
import '../App.css'
// Define Bad component
const Bad = (props) => {
    // Function generating a repsonse that sees userinput as an array cycles through userinput characters and returns character per character BLAHblah
  const genBadRes = () => {
    return Array.from(props.userInput).map((doesntMatter, index) => {
        // cylcing through BLAHblah using index % 8, uses the index of each character as the index increases the expression index % 8 will cycle through thr values 0-7 and the corresponding characters "BLAHblah" will be returned in sequence
        return "BLAHblah"[index % 8]
        // joins the returned characters
    }).join("")
  }
//   Render
  return (
    <>
    {/* Badbot header */}
    <h3>BadBot:</h3>
    <div className="Bad">
    {/* Display response */}
    <p>{genBadRes()} </p>
    </div>
    </>
  )
}
// export Bad
export default Bad