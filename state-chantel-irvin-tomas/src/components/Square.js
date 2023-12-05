// import React, {useState} from "react"



// const Square = () => {

//     const [color, setColor] = useState(0)
         

//     const changeColor = () => {
         
//     }


//    return <>

//     <button onClick={changeColor}>Change Color</button>
    
//      <div className="square"></div>
    
//     </>
// }

import React, { useState } from 'react'
// import App from '../App'

const Square = () => {

  //   
  const colorNames = ['white','red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

  const [currentColor, setCurrentColor] = useState(0)

  const handleClick = () => {
    // Increment index to get the next color
    //The index will be a parameter that 
    setCurrentColor((index) => (index + 1) % colorNames.length)
  }


    // returns a box with inline parameters, onclick, it will pass in the handleClick function
    // within the div, it will pass in the array, colorNames, then the hook, currentColor. 
    // The hook will pass in the same method as handleClick
  return (
    <div style={{width: '200px',height: '200px',backgroundColor: colorNames[currentColor],textAlign: 'center',lineHeight: '100px',cursor: 'pointer', border: '2px solid black'}} onClick={handleClick}>

      {colorNames[currentColor]}

    </div>
  )
}

export default Square