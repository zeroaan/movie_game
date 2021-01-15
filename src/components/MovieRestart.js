import React from "react"
import { useSelector } from "react-redux"

const MovieRestart = ({ setIncorrect }) => {
  const { prevScore, bestScore } = useSelector((state) => state.movie)

  return (
    <div className="movie__incorrect">
      <h1 className="movie__wrong">틀렸습니다. 개봉년도가 맞지 않습니다.</h1>
      <h2 className="movie__count">
        맞춘 갯수: {prevScore}
        <br /> 최고 점수: {bestScore}
      </h2>
      <h2 className="movie__wrongre">다시하려면 아래 버튼을 누르세요</h2>
      <input
        type="button"
        className="movie__re"
        value="다시하기"
        onClick={() => {
          setIncorrect(false)
        }}
      ></input>
    </div>
  )
}

export default MovieRestart
