import React from 'react'

const UpperCased = ({ name }) => {
  const changeToUpperCase = () => {
    return name.toUpperCase()
  }

  return (
    <>
      <h2>GOOD ROBOT:</h2>
      <p>{changeToUpperCase()}</p>
    </>
  )
}

export default UpperCased






//import React from 'react'

//const UpperCased = () => {
    //const changeToUpperCase = (userInput) => {
        //return userInput.toUpperCase
    //}
//return (
 //<>
   //<h2>GOOD ROBOT:</h2>
  
   //<p>{changeToUpperCase()}</p>
 
 //</>

//)

//}



//export default UpperCased

