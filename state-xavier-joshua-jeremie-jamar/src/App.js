import React from "react"
import Counter from "./components/Counter"
import "./App.css"

const App = () => {
  return (
    <>
      <h1>Counter Application</h1>
      <div className="counters">
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App