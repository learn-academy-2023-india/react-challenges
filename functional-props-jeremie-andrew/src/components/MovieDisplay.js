import React from "react"

const MovieDisplay = (props) => {
  return (
    <>
      <p>Movie name: {props.movie.name}</p>
      {props.movie.watched && <p>Seen It!</p>}
      <button onClick={() => props.watchedMovie(props.index)}>
        Watch Movie
      </button>
    </>
  )
}

export default MovieDisplay