// import React from "react"

// const Dice = ({onRoll, result}) => {
//     const imagePath = result ? `./src/assets${result}.png` : null

//   return (
//     <>
     
//   </>
// );
// };

// export default Dice

import React from 'react';
import dice1 from "../assets/1.png"
import dice2 from "../assets/2.png"
import dice3 from "../assets/3.png"
import dice4 from "../assets/4.png"
import dice5 from "../assets/5.png"
import dice6 from "../assets/6.png"

const Dice = ({ onRoll, result }) => {
  const imagePath = result ? getImagePath(result) : null;
  function getImagePath(result) {
    switch (result) {
        case 1:
          return dice1
        case 2:
          return dice2
          case 3:
          return dice3
        case 4:
          return dice4
          case 5:
          return dice5
        case 6:
          return dice6
     default:
            return null
  }
  }
  return (
    <div
      style={{
        width: '100px',                    
        height: '100px',                  
        border: '2px solid black',         
        backgroundColor: 'white',          
        display: 'flex',                   
        justifyContent: 'center',          
        alignItems: 'center',              
        cursor: 'pointer',                 
      }}
      onClick={onRoll}                     
    >
    
      {imagePath ? (
        <img src={imagePath} alt={`Dice ${result}`} style={{ width: '100%', height: '100%' }} />
      ) : (
        result
      )}
    </div>
  );
};


export default Dice;