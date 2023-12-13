import React from "react";

const Shadybot = (props) => {
    // console.log(props)
    const modifiedUserInput = (string) => {
        // console.log(string.split(""))
        return string.split("").map((string, index) => {
            if(index % 3 === 0){
                return "B"           
            }  else if (index % 3 === 1) {
                return "L"
            }
                else {
                    return "A"
                }
        })
    }
    return (
        <>
            <h3>Shadybot:</h3>
            <p>Someone you know told me... {modifiedUserInput(props.userInput)}</p>
        
        </>

    )
}

export default Shadybot
