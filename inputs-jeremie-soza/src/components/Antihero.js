
import React from 'react'

const Antihero = ({ userInput }) => {
  const reversedInput = userInput.split('').reverse().join('')

  return (
    <div className="robot-container">
      <p>{reversedInput}</p>
    </div>
  )
}

export default Antihero
