import React, { useState } from "react"
import { useSelector } from "react-redux"
import "./Movies.css"
import MovieGame from "components/MovieGame"
import MovieRestart from "components/MovieRestart"

const Movies = () => {
  const { score, bestScore } = useSelector((state) => state.movie)

  const [incorrect, setIncorrect] = useState(false)

  let mode = null
  if (incorrect === false) {
    mode = <MovieGame setIncorrect={setIncorrect} />
  } else {
    mode = <MovieRestart setIncorrect={setIncorrect} />
  }

  return (
    <div className="App">
      <h4 className="movie__highscore">최고 점수: {bestScore}</h4>
      <h4 className="movie__currentscore">현재 점수: {score}</h4>
      {mode}
    </div>
  )
}

export default Movies
