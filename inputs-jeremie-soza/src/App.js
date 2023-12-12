//  import GoodRobot from './components/GoodRobot.js'
// import BadRobot from './components/BadRobot.js'
// import BigBrother from './components/BigBrother.js'
// import { useState } from 'react'
// const App = () => {
//   const [goodRobotInput, setGoodRobotInput] = useState("")
//   const [badRobotInput, setBadRobotInput] = useState("")
//   const [bigBrotherInput, setBigBrotherInput] = useState("")
//   const handleGoodRobotInput = (event) => {
//     setGoodRobotInput(event.target.value)
//   }
//   const handleBadRobotInput = (event) => {
//     setBadRobotInput(event.target.value)
//   }
//   const handleBigBrotherInput = (event) => {
//     setBigBrotherInput(event.target.value)
//   }
//   console.log(goodRobotInput, badRobotInput, bigBrotherInput)
//   return (
//     <>
//       <h1>Robo Active Listening</h1>
//       <h2>Good Robot</h2>
//       <input type="text" value={goodRobotInput} onChange={handleGoodRobotInput} />
//       <GoodRobot goodRobotInput={goodRobotInput} />
//       <h2>Bad Robot</h2>
//       <input type="text" value={badRobotInput} onChange={handleBadRobotInput} />
//       <BadRobot badRobotInput={badRobotInput} />
//       <h2>Big Brother</h2>
//       <input type="text" value={bigBrotherInput} onChange={handleBigBrotherInput} />
//       <BigBrother bigBrotherInput={bigBrotherInput} />
//     </>
//   )
// }
// export default App




import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import BigBrother from './components/BigBrother'

const App = () => {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
     <h1>Robo Active Listening</h1>
      <input type="text" value={userInput} onChange={handleChange} />

      <h2>Good Robot</h2>
      <GoodRobot userInput={userInput} />

      <h2>Bad Robot</h2>
      <BadRobot userInput={userInput} />

      <h2>Big Brother</h2>
      <BigBrother bigBrotherInput={userInput} />
    </>
  )
}

export default App