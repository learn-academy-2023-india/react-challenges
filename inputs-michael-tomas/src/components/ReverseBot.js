import React from "react"



const ReverseBot = (props) => {

        // badResponse function takes in string parameter and splits into an array
        const reverseResponse = (string) =>{
    
            let newArr = string.split("").reverse()
            return newArr

        }

    return (
        <>
            {props.userInput && <p>I'm here to reverse your words, like this: <span>{reverseResponse(props.userInput)}</span></p>}
        </>
    )
}

export default ReverseBot