import React, {useState} from "react"
import "./App.css"

const App = () => {
  const [rainBow, setRainBow] = useState("white")

  return (
    <>
      <h1>Color Changer</h1>
      <div className="color-box">{rainBow}</div>
    </>
  )
}

export default App
// const colorArray = () =>
// const allColors = ["red", "orange", "yellow", "green", "blue", "purple"] ** ask about ""
// const colorSelect = allColors [Math.floor(Math.random() * allColors.length)]
// setRainBow(colorSelect) 
// const colorClick = () => {
// setRainBow(allColors)
// }

// code is for after the return

<div onClick={colorClick}rainBow> 