// import React from "react"
// const BigBrother = (props) => {
//     let bigBrotherOutput = ""
//     for (let i = 0; i < props.bigBrotherInput.length; i++) {
//       bigBrotherOutput += "I'm always watching"
//     }
//     return (
//       <p>{bigBrotherOutput}</p>
//     )
  
//     }

// export default BigBrother



import React from 'react'

const BigBrother = (props) => {

    let bigBrotherOutput = ''

    for (let i = 0; i < props.userInput.length; i++) {
      bigBrotherOutput += "I'M ALWAYS WATCHING"
    }
  
    return (
      <>
  
        <p> {bigBrotherOutput}</p>
      </>
    )
  }


//   const initialMessage = "I'm always watching"

// const message = `${initialMessage} `

//   return (
//     <>
//       <p>{message.map().slice(0)}</p>
//     </>
//   )
// }

export default BigBrother