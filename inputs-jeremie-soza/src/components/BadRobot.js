// import React from "react"
// const BadRobot = (props) => {
//   let badRobotOutput = ""
//   for (let i = 0; i < props.badRobotInput.length; i++) {
//     badRobotOutput += "BLAHBLAHBLAH"
//   }
//   return (
//     <p>{badRobotOutput}</p>
//   )
// }
// export default BadRobot

import React from 'react'

const BadRobot = (props) => {
  let badRobotOutput = ''

  for (let i = 0; i < props.userInput.length; i++) {
    badRobotOutput += 'BLAH'
  }

  return (
    <>

      <p> {badRobotOutput}</p>
    </>
  )
}

export default BadRobot