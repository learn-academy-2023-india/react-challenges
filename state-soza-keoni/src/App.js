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

import React, {useState} from "react"
import "./App.css" 
import Counter from "./components/Counter"
import Square from "./components/Square"


const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount (count + 1)
  }
  return (
    <>
      <h1>Counter Application</h1>
      <div onClick={handleClick}>Count {count}</div>
      <div className="counter-box">
      <Counter />
      <Counter />
      <Counter />
      </div>
      <Square />
    </>
  )
}

export default App