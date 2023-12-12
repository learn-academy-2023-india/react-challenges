import React, {useState} from "react" 
import Menu from "./components/Menu"
// import Order from "./components/Order"
import './App.css';

const App = () => {
  const [special, setSpecial] = useState(
    [
     {food: "breakfast", special: "eggs, bacon, pancakes", price: 10 },
     {food: "lunch", special: "hamsandwich, potatochips, apple",  price: 7 }, 
     {food: "dinner", special: "burger, fries, beer", price: 15 }, 
    ]
  )
  // console.log("food: ", food);

const specialMenu = (customerOrder) => {
console.log(customerOrder)
console.log(special[customerOrder])
console.log(special[customerOrder].price)
special[customerOrder].price = true
setSpecial([...special])
}
return (
  <>
      <h1>are you hungry?</h1>
      <Menu special={special} specialMenu={specialMenu} />

  </>
)
}
export default App;
