import React, { useState } from "react"

const ColorString = () => {
  const [color, setColor] = useState(0)
  

  const handleClick = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    setColor("#" + randomColor)
  }

  return (
    <div onClick={handleClick} className="square" style = { {backgroundColor: color} }>
    </div>
  )
}

export default ColorString

