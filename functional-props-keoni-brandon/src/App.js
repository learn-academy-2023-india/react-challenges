import React, { useState } from "react"
import MenuItem from "./components/MenuItem"


const App = () => {
  const [menu, setMenu] = useState(
    [
      { name: "kimchi", price: 1.99, selected: false },
      { name: "fish cake", price: 2.99, selected: false },
      { name: "ddukbokki", price: 8.99, selected: false },
      { name: "soju", price: 9.99, selected: false },
      { name: "maekju", price: 7.99, selected: false },
    ]
  )

  const [cartItems, setCartItems] = useState([])

  const onCart = (cartItems) => {
  }
console.log(onCart)
return(
  <>
    <h1>India Mukbang</h1>
    <h3>Menu</h3>

    {menu.map((value, index) => {
      return (
        <MenuItem  value = {value}
        key={index}
        onCart={() => onCart(value)}/>

      )
     
    })
    }
    <h2>On your cart: {onCart}</h2>
     <h2>Total amount: </h2>
  </>
)
}
export default App