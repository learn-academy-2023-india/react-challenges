import React from 'react'

const UpperCasedTwo = ({ name }) => {
  const changeToUpperCase = () => {
    return name.toUpperCase()
  }

  return (
    <>
      <h2>BAD ROBOT:</h2>
      <p>{changeToUpperCase()}</p>
    </>
  )
}

export default UpperCasedTwo





//import React from 'react'

//const UpperCasedTwo = () => {
    //const changeToUpperCase = (userInput) => {
        //return userInput.toUpperCase
    //}
    
//return (
 //<>
   //<h2>BAD ROBOT:</h2>

   //<p>{changeToUpperCase()}</p>
 
 //</>

//)

//}



//export default UpperCasedTwo