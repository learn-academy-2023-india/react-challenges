import React from 'react'

const Bad = (props) => {
    const blaBla = (string) => {
        return string.split("").map((value, index) => {
            if (index % 3 === 0){
                return 'B'
            }else if (index % 3 === 1){
                return 'L'
            }else if(index % 3 === 2){
                return 'A'
            }
        }).join("")
      
    }
    // blaBla("hello")
  return (
    <>
      <h4>Bad Robot:</h4>
      <p> Hi, did you say: {blaBla(props.userInput)}</p>
    </>
  )
}

export default Bad