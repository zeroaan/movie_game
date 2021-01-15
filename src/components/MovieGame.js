import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { shuffleMovie, plusScore, resetScore } from "store/actions/movie"

const MovieGame = ({ setIncorrect }) => {
  const dispatch = useDispatch()
  const { moviesData, score } = useSelector((state) => state.movie)

  const [value, setValue] = useState("")

  return (
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
}

export default MovieGame
