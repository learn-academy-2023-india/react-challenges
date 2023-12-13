import React, {useState} from 'react'
import Good from './components/Good'
import Bad from './components/Bad'
import Kanye from './components/Kanye'

const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleInput = (event) => {
    setUserInput(event.target.value)
  }
  return (
    <>
      <h1>This is the header.</h1>
      <input type="text" onChange={handleInput}/>
      <Good userInput={userInput}/>
      <Bad userInput={userInput}/>
      <Kanye userInput={userInput}/>
    </>
  )
}

export default App