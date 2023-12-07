// const AddPerson = (props) => {
//     return <button onClick={props.addPerson}>Add Person</button>
//   }
  
//   export default AddPerson

import React from "react"

const Episode = (props) => {
  // props = {title: 'CSS Rocks!'}
  // console.log(props)
  return <div className="card">Episode Title: {props.title}
        <button onClick={props.handleNextEpisode}>Dice Roll</button>

  </div>
}

export default Episode