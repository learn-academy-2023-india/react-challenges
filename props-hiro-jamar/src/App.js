import './App.css';
import Dice from './components/Dice'
import Rolls from './components/Rolls'

const App = () => {
  return (
    <div>
      <h1>Roll Dice</h1>
    <Dice />
    <Rolls />
    </div>
  )
}

export default App