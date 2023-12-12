// App.js
import React, { useState } from "react";
import FoodMenu from "./components/FoodMenu";
import OrderSummary from "./components/OrderSummary";

const App = () => {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: "Burger", price: 10.99 },
    { id: 2, name: "Pizza", price: 12.99 },
    { id: 3, name: "Salad", price: 7.99 },
    { id: 4, name: "Deez", price: 420.69},
    // Add more food items
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const addToOrder = (itemId) => {
    const selectedItem = foodItems.find((item) => item.id === itemId);
    setSelectedItems((prevItems) => [...prevItems, selectedItem]);
  };

  const removeFromOrder = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== itemId)
    );
  };
  

  return (
    <>
      <h1>Food Ordering App</h1>
      <FoodMenu foodItems={foodItems} addToOrder={addToOrder} />
      <OrderSummary selectedItems={selectedItems} removeFromOrder={removeFromOrder} />
    </>
  );
};

export default App;
