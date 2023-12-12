import React, { useState } from 'react';
import Menu from "./components/Menu"
import './App.css';

const App = () => {
  const [foodMenu, setFoodMenu] = useState([
    {nameOfFood: "Sushi", price: "$20.99"},
    {nameOfFood: "Wagyu Burger", price: "$25.99"},
    {nameOfFood: "Fries", price: "$9.99"},
    {nameOfFood: "Wagyu Steak", price: "$50.99"},
    {nameOfFood: "Mashed Potatoes", price: "$10.99"},
    {nameOfFood: "Okonimiyaki", price: "$21.99"},
    {nameOfFood: "Takoyaki", price: "$18.99"}
])
const [selectedFoodIndex, setSelectedFoodIndex] = useState(null);

const orderOfFood = (index) => {
  
  setSelectedFoodIndex(index);
}
return (
  <>
    <h1>Pinnacles Restaurant</h1>
    <Menu foodMenu={foodMenu} orderOfFood={orderOfFood} selectedFoodIndex={selectedFoodIndex}
    />
  
  </>
)
}

export default App;
