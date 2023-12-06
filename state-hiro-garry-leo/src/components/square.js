import React, { useState } from "react"

const Square = () => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const [boxes, setBoxes] = useState([])

  const addBox = () => {
    const newColor = getRandomColor()
    setBoxes([...boxes, newColor])
  }

  const randomizeColor = (index) => {
    const updatedBoxes = [...boxes]
    updatedBoxes [index] = getRandomColor()
    setBoxes(updatedBoxes)
  }
  const removeBox = (index) => {
    const updatedBoxes = [...boxes]
    updatedBoxes.splice(index, 1)
    setBoxes(updatedBoxes)
  }

return (
  <div>
    <button className="color-button" onClick={addBox}>
      Add Box
    </button>
    <div className="box-container">
      {boxes.map((color, index) => (
        <div key={index} className="box" style={{ backgroundColor: color }}>
          <div>
            <p>{color}</p>
          </div>
          <button className="color-button" onClick={() => randomizeColor(index)}>
            Randomize Color
          </button>
          <button className="color-button" onClick={() => removeBox(index)}>
            Remove Box
          </button>
        </div>
      ))}
    </div>
  </div>
)
}
export default Square