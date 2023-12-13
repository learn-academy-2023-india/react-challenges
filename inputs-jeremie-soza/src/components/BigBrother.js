import React from 'react'

const BigBrother = (props) => {
  let bigBrotherOutput = ''

  if (props.userInput) {
    for (let i = 0; i < props.userInput.length; i++) {
    bigBrotherOutput += "I'm always watching"
  }
}

  return (
    <>
      <p>{bigBrotherOutput}</p>
    </>
  )
}

export default BigBrother