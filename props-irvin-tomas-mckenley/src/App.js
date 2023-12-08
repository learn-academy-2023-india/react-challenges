import React, {useState} from 'react';
import './App.css';


const App = () => {
  const numberNames = ["1", "2", "3", "4", "5", "6"]
  const [currentNumber, setCurrentNumber] = useState([])
  const [showNumber, showCurrentNumber] = useState(0)
  const rollDice = () => {
  const result = Math.floor(Math.random() * 6) + 1
  setCurrentNumber([...currentNumber, result])
  showDice()
  }
  const showDice =() => {
    showCurrentNumber((index) => (index + 1) % numberNames.length)
  }

  

return (<> 
<div className='cards'>
  <div className='card'>
    
    <ul>
      {currentNumber.map((roll, index) => (
        <li key={index}>Roll {index + 1}: {roll}
        </li>
      ))}
    </ul>
 </div>

 <div className='card' onClick={rollDice}>
 {currentNumber} 
 </div>
 </div></>  

)
}




export default App


 