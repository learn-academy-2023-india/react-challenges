// import React from "react"

// const Greeter = (props) => {
//   return (
//     <>
//       <h3>Hello {props.name}!</h3>
//     </>
//   )
// }

// export default Greeter

import React from "react"

const MediaPlayer = (props) => {
  // console.log(props)
  // props = {currentEpisode: 'CSS Rocks!'}
  // props = {currentEpisode: 'CSS Rocks!', handleNextEpisode: ƒ}
  return (
    <>
      <h3>Current episode: {props.currentEpisode}</h3>
      <button onClick={props.handleNextEpisode}>Dice butt episode</button>

      <br />
      <br />
      <hr />
    </>
  )
}

export default MediaPlayer