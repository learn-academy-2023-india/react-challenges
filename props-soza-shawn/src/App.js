import React, {useState} from "react"
import Dice from "./components/Dice"
import RollLog from "./components/RollLog"

const App = () => {
  const [rolls,setRolls] = useState([])
  const [diceResult, setDiceResult] = useState(null)
  const handleRoll = () => {
    const result = Math.floor(Math.random()* 6) +1 
setDiceResult(result)
setRolls([...rolls, result])
  }
  const handleRestart =() => {
setRolls([])
setDiceResult(null)
  }
  return (
    <>
      
      <Dice onRoll={handleRoll} result={diceResult}/>
      <RollLog rolls={rolls}/>
      <button onClick={handleRestart}> Roll Again</button>
    </> 
  )
}

export default App

































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
