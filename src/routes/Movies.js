import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { shuffleMovie, plusScore, resetScore } from "store/actions/movie"
import "./Movies.css"

const Movies = () => {
  const dispatch = useDispatch()
  const { moviesData, score, prevScore, bestScore } = useSelector((state) => state.movie)

  const [value, setValue] = useState("")
  const [incorrect, setIncorrect] = useState(false)

  let mode = null
  if (incorrect === false) {
    mode = (
      <div>
        <h1 className="title">{moviesData[score].title}</h1>
        <div className="movie__box">
          <img
            className="movie__poster"
            src={moviesData[score].poster}
            alt={moviesData[score].title}
            title={moviesData[score].title}
          />
          <form className="movie__form">
            <input
              className="movie__year__input"
              type="text"
              value={value}
              placeholder="개봉년도 입력 (숫자만 입력)"
              onChange={(e) => {
                setValue(e.target.value)
              }}
            />
            <input
              className="movie__year__button"
              type="submit"
              value="확인"
              onClick={(e) => {
                e.preventDefault()
                if (Number(value) === moviesData[score].year) {
                  dispatch(plusScore())
                  setValue("")
                } else {
                  dispatch(shuffleMovie())
                  dispatch(resetScore())
                  setValue("")
                  setIncorrect(true)
                }
              }}
            />
          </form>
          <h2 className="correct_count">
            맞춘 갯수: <b>{score}</b>
          </h2>
        </div>
      </div>
    )
  } else {
    mode = (
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

  return (
    <div className="App">
      <div
        className="movie__background--left"
        style={{
          background: `center/cover no-repeat url(${moviesData[score].poster})`,
          opacity: "0.4",
        }}
      ></div>
      <div
        className="movie__background--right"
        style={{
          background: `center/cover no-repeat url(${moviesData[score].poster})`,
          opacity: "0.4",
        }}
      ></div>
      <h4 className="movie__highscore">최고 점수: {bestScore}</h4>
      <h4 className="movie__currentscore">현재 점수: {score}</h4>
      {mode}
    </div>
  )
}

export default Movies
