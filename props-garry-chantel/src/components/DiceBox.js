import React from "react"
import Dice from "./Dice"

const DiceBox = (props) => {
    
    // const { border, padding, heading } = props
  
    return (
      <>
        <div className="diceBox">
          <p>Dice Box</p>
          <Dice />
        </div>
      </>
)
}

export default DiceBox

// border={border} padding={padding} heading={heading} 