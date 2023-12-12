import React from "react"

const MenuItem = (props) => {
    console.log("menuItem: ", props.value.name)
    const selectedItem = (selectedItem) => {
    }
    return(
        <>
            <h3>
            {props.value.name}     
            </h3>
            $ {props.value.price}
            <p></p>
            <button onClick={() => props.selectedItem(props.index)}>Order</button>
            {props.value.selected && 
            <h4>Ordered ! !</h4>}
            
        </>
        
    )
}

export default MenuItem

