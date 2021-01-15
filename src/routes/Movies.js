import React, { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import MovieGame from "components/MovieGame"
import MovieRestart from "components/MovieRestart"

const H1HighScore = styled.h1`
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 25px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`
const H1CurrentScore = styled.h1`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 25px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const Movies = () => {
  const { score, bestScore } = useSelector((state) => state.movie)

  const [incorrect, setIncorrect] = useState(false)

  return (
    <>
      <H1HighScore>최고 점수: {bestScore}</H1HighScore>
      <H1CurrentScore>현재 점수: {score}</H1CurrentScore>
      {incorrect ? <MovieRestart setIncorrect={setIncorrect} /> : <MovieGame setIncorrect={setIncorrect} />}
    </>
  )
}

export default Movies
