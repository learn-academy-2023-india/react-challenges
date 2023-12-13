import React from "react"

const GoodRobot = (props) => {
    console.log(props)
    return (
      <>
        <h2><p><b><u>Good Robot</u></b></p></h2> 
        <div style={{ marginLeft: '20px' }}><p>I hear you saying {props.userInput}. Is this correct?</p></div>
      </>
    )
  }
  
  export default GoodRobot