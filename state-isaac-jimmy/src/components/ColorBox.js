import React, { useState } from "react"
import ColorString from "./ColorString"

const ColorBox = () => {
  const [color, setColor] = useState(0)
  

  const handleClick = () => {
    const randomNum = Math.floor(Math.random()*16777215).toString(16)
    setColor("#" + randomNum)
    
  }

  return (
    <div onClick={handleClick} className="square" style = { {backgroundColor: color} }>
    <button onClick = {handleClick} >
    #randomNum
    </button>
    </div>
    
  )
}

export default ColorBox
