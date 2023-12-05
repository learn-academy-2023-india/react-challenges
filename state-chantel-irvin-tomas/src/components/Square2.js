import React, { useState } from 'react'


const Square = () => {
  const colorNames = ['white','red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

  const [currentColor, setCurrentColor] = useState(0)

  const handleClick = () => {
    // Increment index to get the next color
    setCurrentColor((index) => (index + 1) % colorNames.length)
  }



  return (
    <div style={{width: '200px',height: '200px',backgroundColor: colorNames[currentColor], textAlign: 'center',lineHeight: '100px',cursor: 'pointer',border: '2px solid black'}}onClick={handleClick}>

      {colorNames[currentColor]}

    </div>
  )
}

export default Square