import React, { useState } from "react"

const Square = () => {
    const [boxColor,newBoxColor] = useState("white")
    const getRandomColor = () => {
        const colors = ["red","orange","green","yellow","purple","black","pink","gray","brown","blue"]
        return colors [Math.floor(Math.random()* colors.length)]
    }
    const handleClick = () => {
        const newColor = getRandomColor ()
        newBoxColor(newColor) 
        
    } 
return (
    <div className="square" style={{ backgroundColor: boxColor }} onClick = {handleClick}>
{boxColor}

    
     </div>
)}
export default Square