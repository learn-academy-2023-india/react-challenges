import React, { useState } from "react"
// import Order from "./components/Order"
import Menu from "./components/Menu"
import "./App.css"

const App = () => {
  const [item, setItem] = useState([
    { dish: "Jollof Rice", price: 9.99, selected: false },
    { dish: "Kala", price: 5.00, selected: false },
    { dish: "Fruit", price: 5.00, selected: false },
    { dish: "Dirty Rice", price: 9.99, selected: false}
  ])

  console.log("item: ", item)

  const foodSelection = (selectedDish) => {
    item[selectedDish].selected = true
    setItem([...item])
  }

return (
    <>
      <h1>Food Truck</h1>
      <Menu item={item} foodSelection={foodSelection} /> 
    </>
  )
}  


export default App

    {/* <Order />
      <Menu />
      {item.map((value, index) => {
        return <Menu food={food} key={price} />
      })} */}