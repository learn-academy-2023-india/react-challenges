import React from "react"

const OrderUI = ({ food, onSelect }) => {
  return (
    <div>
      <p>{food.item} - ${food.price.toFixed(2)}</p>
      <img src={food.image} alt={food.item} style={{ width: "200px", height: "200px" }} />
      <button onClick={() => onSelect(food.item)}>Select</button>
    </div>
  )
}

export default OrderUI
