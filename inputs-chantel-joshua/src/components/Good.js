import React from 'react'

const Good = (props) => {
  return (
    <>
      <h4>Good Robot:</h4>
      <p> Hi, did you say: {props.userInput}</p>
    </>
  )
}

export default Good