import React from "react"

const Menu = ({ onAddToOrder }) => {
  const FoodItems = ({ name, price }) => {
    return (
      <div>
        <p>{name} - ${price}</p>
        <button onClick={() => onAddToOrder({ name, price })}>Order</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Menu:</h2>
      <FoodItems name="Ribeye Steak 14oz" price={18.99} />
      <FoodItems name="Porterhouse 16oz" price={16.99} />
      <FoodItems name="NY Strip 8oz" price={12.99} />
      <FoodItems name="Okra" price={3.99} />
      <FoodItems name="Mashed Potatoes" price={4.99} />
      <FoodItems name="Au Gratin" price={3.99} />
    </div>
  )
}

export default Menu