import React from "react"

const Sunnybot = (props) => {
    console.log(props)
    return (
        <>
        <h3>Sunnybot:</h3>
        <p>On the bright side, {props.userInput}</p>
        
        </>

    )
}

export default Sunnybot