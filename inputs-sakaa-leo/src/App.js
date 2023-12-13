import React, { useState } from "react" 
import Shadybot from "./components/Shadybot"
import Sunnybot from "./components/Sunnybot"
import Yeezybot from "./components/Yeezybot"


const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleInput = (event) => {
      setUserInput(event.target.value)
  }
console.log(userInput)
  return (
    <>
      <h1>The Shade Room Robot</h1>
      <input type="text" onChange={handleInput} />
      {/* <p>hello {userInput}</p> */}
      <Sunnybot userInput={userInput}/>
      <Shadybot userInput={userInput}/>
      <Yeezybot userInput={userInput}/>
    </>


  )

}

export default App