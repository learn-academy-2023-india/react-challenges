import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(null)

  const newColor = () => {
    const allColors = ["red", "yellow", "green", "blue", "purple", "pink", "orange"]
    const possColors = allColors[Math.floor(Math.random() * allColors.length)]
    setCount(possColors)
  }

  const handleClick = () => {
    setCount(newColor)
  }

  return (
    <div onClick={handleClick} className="counter-box" style={{ backgroundColor: count}}>
      Color: {count}
    </div>
  )
}

export default Counter