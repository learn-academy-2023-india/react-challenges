import React from 'react'

const Order = (props) => {
    // console.log("props: ", props)
  return (
    <>
    <h4>Your Order:</h4>
    {props.food
        .filter((value, index) => {
            // console.log(value)
            return (
                value.selected
            )
        })
        .map((value, index) => {
            console.log(value)
            return (
                value.name
            )
        })
    }
        
    </>
  )
}

export default Order