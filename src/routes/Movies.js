import React, { useState } from "react"
import "./Movies.css"
import { moviesData, shuffle } from "../data/moviesData"

const Movies = () => {
  const [count, setCount] = useState(0)
  const [currentscore, setCurrentscore] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [value, setValue] = useState("")
  const [items, setItems] = useState(moviesData)
  const [movie, setMovie] = useState(items[count])
  const [incorrect, setIncorrect] = useState(false)

  let mode = null
  if (incorrect === false) {
    mode = (
      <div>
        <h1 className="title">{movie.title}</h1>
        <div className="movie__box">
          <img className="movie__poster" src={movie.poster} alt={movie.title} title={movie.title} />
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
                if (Number(value) === movie.year) {
                  setCount(count + 1)
                  if (highscore <= count) {
                    setHighscore(count + 1)
                  }
                  setMovie(items[count])
                  setValue("")
                } else {
                  setItems(shuffle(moviesData))
                  setCurrentscore(count)
                  setCount(0)
                  setMovie(items[count])
                  setValue("")
                  setIncorrect(true)
                }
              }}
            />
          </form>
          <h2 className="correct_count">
            맞춘 갯수: <b>{count}</b>
          </h2>
        </div>
      </div>
    )
  } else {
    mode = (
      <div className="movie__incorrect">
        <h1 className="movie__wrong">틀렸습니다. 개봉년도가 맞지 않습니다.</h1>
        <h2 className="movie__count">
          맞춘 갯수: {currentscore}
          <br /> 최고 점수: {highscore}
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
          background: `center/cover no-repeat url(${movie.poster})`,
          opacity: "0.4",
        }}
      ></div>
      <div
        className="movie__background--right"
        style={{
          background: `center/cover no-repeat url(${movie.poster})`,
          opacity: "0.4",
        }}
      ></div>
      <h4 className="movie__highscore">최고 점수: {highscore}</h4>
      <h4 className="movie__currentscore">현재 점수: {count}</h4>
      {mode}
    </div>
  )
}

export default Movies
