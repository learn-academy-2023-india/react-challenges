// Random number generator between 1-6, console.log all roles. 

import React from 'react'


const Dice = () => {
	
    var dice = Math.floor((Math.random() * 6) +1)
    return dice

}
export default Dice