import React from 'react'

const BadRobot = (props) => {
  let badRobotOutput = ''

  if (props.userInput) {
    for (let i = 0; i < props.userInput.length; i++) {
    badRobotOutput += 'BLA'
  }
}

  return (
    <>
      <p>{badRobotOutput}</p>
    </>
  )
}

export default BadRobot