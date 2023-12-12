// FoodMenu.js
import React from "react";

const FoodMenu = ({ foodItems, addToOrder }) => {
  return (
    <div>
      <h2>Menu</h2>
      {foodItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => addToOrder(item.id)}>Add to Order</button>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
