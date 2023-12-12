import React, { useState } from "react"
import Menu from "./components/Menu"
import Order from "./components/Order"
import './App.css'

const App = () => {
  const [selectedItems, setSelectedItems] = useState([])

  const addToOrder = (foodItem) => {
    const existingItemIndex = selectedItems.findIndex(item => item.name === foodItem.name)

    if (existingItemIndex !== -1) {
      const updatedItems = [...selectedItems]
      updatedItems[existingItemIndex].quantity += 1
      setSelectedItems(updatedItems)
    } else {
      setSelectedItems([...selectedItems, { ...foodItem, quantity: 1 }])
    }
  }

  return (
    <>
      <h1>Food Ordering App</h1>
      <Menu onAddToOrder={addToOrder} />
      <Order selectedItems={selectedItems} />
    </>
  )
}

export default App