import React from 'react'

const Menu = (props) => {
    // console.log("food: ", food)
  return (
    <>
    {props.food.map((value, index) => {
        return (
            <ul key={index}>
                <li>
                    {value.name} - ${value.price}
                </li>
                <button onClick={() => props.foodOrder(index)}> Select this item</button>
            </ul>
        )
    })}
    </>
  )
}

export default Menu