import React from 'react'

const Kanye = (props) => {
    const kanyeArray = ["Beyonce is the best artist of ALL TIME!"]
    const crazyYeezy = (string) => {
        return string.split("").map((value, index) => {
        return kanyeArray[(index + 1) % kanyeArray.length].charAt(index)
        }).join("")
    }
  return (
    <>
      <h4>Kanyebot 3000:</h4>
      <p> I'mma let you finish but {crazyYeezy(props.userInput)}</p>
    </>
  )
}

export default Kanye


  // index 