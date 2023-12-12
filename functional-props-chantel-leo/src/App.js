import React, {useState} from 'react'
import Menu from './components/Menu'
import Order from './components/Order'

const App = () => {
  const [food, setFood] = useState(
  [
    {name: "Cheeseburger", price: 6.99, selected: false},
    {name: "Fries", price: 2.99, selected: false},
    {name: "Chicken Nuggets", price: 5.99, selected: false},
    {name: "Cheesecake", price: 3.99, selected: false}
  ]
)
// console.log("food: ", food)

const foodOrder = (selectedFood) => {
  food[selectedFood].selected = true
  setFood([...food])
}

  return (
    <>
      <h1>Menu</h1>
      <Menu food={food} foodOrder={foodOrder}/>
      <Order food={food}/>
    </>
  )
}

export default App