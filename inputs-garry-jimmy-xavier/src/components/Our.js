// Importing React library
import React from "react"
import '../App.css'
//Defining Our
const Our = (props) => {
  //function to mod te input changing it characters cycling through Our characters
  const genOurRes = () => {
    return Array.from(props.userInput).map((char, index) => {
      // cycling through our charcters using index % 18, uses the index of each character as the index increases the expression index % 8 will cycle through thr values 0-7 and the corresponding characters "BLAHblah" will be returned in sequence
      return "GaRrYjImMyXaViErWiN"[index % 18]
      // joins the changed charcaters
    }).join("")
  }
// Render
  return (
    <>
    {/* OurBot Header */}
    <h3>OurBot:</h3>
    <div className="Our">
    {/* display the response */}
    <p>{genOurRes()}</p>
    </div>
    </>
  )
}
// export our
export default Our
