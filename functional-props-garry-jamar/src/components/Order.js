const Order = ({ selectedItems }) => {


    return (
      <div>
        <h2>Your Order:</h2>
        {selectedItems.map((item, index) => (
          <p key={index}>{item.name} - Quantity: {item.quantity}</p>
        ))}
        <h3>Total Cost for All Items: ${selectedItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
      </div>
    )
  }
  
  export default Order