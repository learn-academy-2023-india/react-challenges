import { useState} from 'react'
import MenuItem from './components/MenuItem'


const App = () => {

  const [menu, setMenu] = useState([
    {name: "Hotdog 🌭 - $1.00", ordered: false},
    {name: "Burger 🍔 - $1.00", ordered: false},
    {name: "Corn on the Cob 🌽 - $1.00", ordered: false},
    {name: "Fries 🍟 - $1.00", ordered: false},
    {name: "Steak 🍖 - $1.00", ordered: false},
    {name: "Sweet Tea 🍺 - $1.00", ordered: false},

  

    

  ])
  const orderMenuItem = (slectedItem) => {
    console.log("clicked")
  }
  return (
    
    <>
    <h1>IRVIN and JOSHUA PARTY</h1>
    <h4>Menu</h4>

    {menu.map((menuItem, index) => {
      return (
      <MenuItem 
      menuItem={menuItem}
      key={index}
      /> 
    )
})}
   

     
     </>
  )
}

export default App;