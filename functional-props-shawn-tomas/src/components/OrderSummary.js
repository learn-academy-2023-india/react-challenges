// OrderSummary.js
import React from "react";

const OrderSummary = ({ selectedItems, removeFromOrder }) => {
  const calculateBaseTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalWithTax = () => {
    const itemsWithoutDeez = selectedItems.filter(item => item.name !== "Deez");
    const baseTotal = itemsWithoutDeez.reduce((total, item) => total + item.price, 0);
    const salesTaxRate = 0.1; // 10% sales tax, you can adjust this value
    const totalWithTax = baseTotal + baseTotal * salesTaxRate;

    if (selectedItems.some(item => item.name === "Deez")) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }

    return totalWithTax.toFixed(2); // Round the total with tax to two decimals
  };

  return (
    <div>
      <h2>Order Summary</h2>
      {selectedItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromOrder(item.id)}>Remove from Order</button>
        </div>
      ))}
      <p>Base Total: ${calculateBaseTotal().toFixed(2)}</p>
      <p>Total with Tax: ${calculateTotalWithTax()}</p>
    </div>
  );
};

export default OrderSummary;
