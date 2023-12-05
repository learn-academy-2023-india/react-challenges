import React, {useState} from "react"
//import App from "../App"

// const Counter = () => {
//   return (
//     <>
//       <h1>Counter Application</h1>
//       <Counter />
//       <Counter />
//       <Counter />
//     </>
//   )
// }
const Counter = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div onClick={handleClick}className="counter-box"> Count {count}</div>
  )}

export default Counter
