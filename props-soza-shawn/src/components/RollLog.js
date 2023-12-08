import React from "react"

// const RollLog = ({rolls}) => {
//   return (
//     <> 
//       <h3>Roll The dice {props.rolls}</h3>
//     </>
//   )
// }

const RollLog = ({ rolls }) => {
    return (
      <div>
        <h2>Roll Log:</h2>
        <ul>
          {rolls.map((roll, index) => (
            <li key={index}>{roll}</li>
          ))}
        </ul>
      </div>
    );
  };

export default RollLog