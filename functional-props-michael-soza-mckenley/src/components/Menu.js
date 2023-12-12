import React from "react"

const Menu = (props) => {




    return( 
        <>
        {props.special.map((value, index) => {
            return (
                <ul key={index}>
                    <li>
                        {value.food} {value.special}
                    </li>
                    <button onClick={() => props.specialMenu(index)}> order here </button>
                    {value.price && 
                    <p>your order will be ready soon </p>
                    }
                    </ul>

            )
        } )}
        </>
    )
}
export default Menu