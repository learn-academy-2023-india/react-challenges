import React, { useState } from "react"

const ColorBox = () => {
  const [color, setColor] = useState(0)
  

  const handleClick = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = "#" + randomColor
  }

  return (
    <div onClick={handleClick} className="square" style = { {square: color} }>
       
    </div>
  )
}

export default ColorBox
