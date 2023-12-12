import React from "react"
// import Order from "./components/Order"

const Menu = (props) => {
  return (
    <>
    {props.item.map((value, index) => {
       console.log(value)
        return(
          <ul key={index}>
            <li>
              {value.dish} - Dish Price: {value.price}
            </li>
            <button onClick={() => props.foodSelection(index)}> Select this Dish </button>
          </ul>
        )
      })}
    </>
  )
}

export default Menu