import React from "react"
import Counter from "./components/Counter"
import "./App.css"
import BoxManager from "./components/BoxManager"

const App = () => {
  return (
    <>
      <h1>Counter Application</h1>
      <div className="counters">
        <Counter />
        <Counter />
        <Counter />
        <BoxManager />
      </div>
    </>
  )
}

export default App