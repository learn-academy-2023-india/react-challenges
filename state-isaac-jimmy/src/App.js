import './App.css'
import React from 'react'
import AddRemButtons from './components/AddRemButtons'

const App = () => {
  return (
    <>
    <h1>Press 'Add Box' to start</h1>
    <h2>Click the button in the box to randomize color</h2>
    <h3>Once a favored color is found hexadecimal ID will be shown in button to be used as a reference.
      Multiple boxes can be added and values will save.
    </h3>
    <h4>Enjoy</h4>

    <AddRemButtons/>
    {/* deleted colorbox component line due to being instantiated in Boxes component */}
    </>
  )
}


export default App;
