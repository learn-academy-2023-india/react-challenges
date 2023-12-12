import React from "react";

const Menu = (props) => {
    return (
        <>
        {props.foodMenu.map((food,index) => (
            <ul key={index}>
                <li>
               Price of Food:{food.price}
                </li>
          <button onClick= {() => props.orderOfFood(index)}>Select an item to order</button>
          {props.selectedFoodIndex === index &&(
          <p>Thank you for Ordering {food.nameOfFood}.</p>
)}
        </ul>
    ))}
         </>
    )
        
    }

export default Menu