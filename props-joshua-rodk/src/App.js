// import React, { useState } from "react"
// import Greeter from "./components/Greeter"
// import AddPerson from "./components/AddPerson"
// import "./App.css"

// const App = () => {
//   const [people, setPeople] = useState(["Hamilton", "Washington", "Jefferson"])

//   const addPerson = () => {
//     const newPerson = prompt()
//     setPeople([...people, newPerson])
//   }

//   return (
//     <>
//       <h1>Greeter Application</h1>
//       {people.map((person, index) => {
//         return <Greeter name={person} key={index} />
//       })}
//       <AddPerson addPerson={addPerson} />
//     </>
//   )
// }

// export default App

import React, { useState } from "react"
import Episode from "./components/Episode"
import MediaPlayer from "./components/MediaPlayer"
import "./App.css"

const App = () => {
  const episodes = [
    "Dice!", "Pool"
    
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])
  // console.log(currentEpisode)
  const handleNextEpisode = () => {
    // setCurrentEpisode(currentEpisode + 1)
    // --> CSS Rocks!1
    // --> "CSS Rocks!" + 1
    const nextIndex = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextIndex])
  }

  return (
    <>
      <h1>Our Work Example</h1>
      <MediaPlayer
        currentEpisode={currentEpisode}
        handleNextEpisode={handleNextEpisode}
      />
      <div className="cards">
        {episodes.map((episode, index) => {
          return <Episode title={episode} key={index} />
        })}

        {/* <Episode title={episodes[0]} />
        <Episode title={episodes[1]} />
        <Episode title={episodes[2]} />
        <Episode title={episodes[3]} />
        <Episode title={episodes[4]} />
        <Episode title={episodes[5]} /> */}
      </div>
    </>
  )
}

export default App