import React from "react"


//Good Robot prompt that props in user input and mirrors user input.
const GoodRobot = (props) => {


return(
    <>
        {/* paragraph that props in user input */}
        {props.userInput && <p> I'm hearing you say <span>{props.userInput}</span>, is that correct?</p>}
        

    </>
)
}







export default GoodRobot;