import React, { useState } from "react"
import OrderUI from "./components/OrderUI"
import MenuUI from "./components/MenuUI"
import "./App.css"

const App = () => {
  const [food, setFood] = useState(MenuUI())
  // stretch goals
  const [totalCost, setTotalCost] = useState(0)

  const handleSelect = (selectedItem) => {
    const updatedFood = food.map((foodItem) => {
      if (foodItem.item === selectedItem) {
        const selected = !foodItem.selected
        return { ...foodItem, selected }
      } else {
        return { ...foodItem }
      }
    })
    setFood(updatedFood)
    updateTotalCost(updatedFood)
  }

  const updateTotalCost = (updatedFood) => {
    let baseTotal = 0
    for (const foodItem of updatedFood) {
      if (foodItem.selected) {
        baseTotal += foodItem.price
      }
    }

    // 8% sales tax
    const salesTaxRate = 0.08
    const totalWithTax = baseTotal * (1 + salesTaxRate)
    setTotalCost(totalWithTax)
  }

  const selectedFood = food.filter((foodItem) => foodItem.selected)

  return (
    <>
    <div className="app-container">
      <h1>Food Ordering App</h1>
      <div className="menu-container">
        {food.map((foodItem, index) => {
          return <OrderUI key={index} food={foodItem} onSelect={handleSelect} />
        })}
      </div>
      <div className="selected-items-container">
        <h2>Selected Items:</h2>
        <ul>
          {selectedFood.map((foodItem, index) => (
            <li key={index}>
              {foodItem.item} - ${foodItem.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Base Total: ${totalCost.toFixed(2)}</p>
        <p>Total with Sales Tax: ${totalCost.toFixed(2)}</p>
      </div>
    </div>
    </>
  )
}

export default App
