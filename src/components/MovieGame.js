import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { shuffleMovie, plusScore, resetScore } from "store/actions/movie"

const DivPoster = styled.div`
  position: absolute;
  left: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    align-items: flex-end;
    width: 100vw;
    height: 65vh;
  }
`
const ImgPoster = styled.img`
  width: 28vw;
  @media screen and (max-width: 700px) {
    width: 220px;
  }
`

const DivForm = styled.div`
  position: absolute;
  left: 50%;
  width: 50vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 35vh;
  }
`

const H1Title = styled.h1`
  font-size: 4vw;
  margin-bottom: 30px;
  @media screen and (max-width: 700px) {
    font-size: 35px;
    margin-bottom: 15px;
  }
`

const InputMovie = styled.input`
  font-family: "Jua", sans-serif;
  letter-spacing: 2px;
  font-size: 16px;
  width: 200px;
  height: 45px;
  padding-left: 10px;
  outline: none;
  border: 3px solid black;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    font-size: 14px;
    height: 35px;
  }
`

const ButtonMovie = styled.button`
  font-family: "Jua", sans-serif;
  font-size: 16px;
  width: 58px;
  height: 54px;
  margin-left: 10px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 14px;
    width: 48px;
    height: 44px;
  }
`

const H2Score = styled.h2`
  width: 50vw;
  font-size: 2.8vw;
  margin-top: 50px;
  @media screen and (max-width: 700px) {
    font-size: 24px;
    margin-top: 20px;
  }
`

const MovieGame = ({ setIncorrect }) => {
  const dispatch = useDispatch()
  const { moviesData, score } = useSelector((state) => state.movie)

  const [inputYear, setInputYear] = useState("")

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (inputYear !== "") {
      setInputYear("")
      if (Number(inputYear) === moviesData[score].year) {
        dispatch(plusScore())
      } else {
        dispatch(shuffleMovie())
        dispatch(resetScore())
        setIncorrect(true)
      }
    }
  }
  const onChangeInput = (e) => {
    const { value } = e.target
    setInputYear(value)
  }

  return (
    <>
      <DivPoster>
        <ImgPoster src={moviesData[score].poster} alt={moviesData[score].title} title={moviesData[score].title} />
      </DivPoster>
      <DivForm>
        <H1Title>{moviesData[score].title}</H1Title>
        <form onSubmit={onSubmitForm}>
          <InputMovie type="text" value={inputYear} placeholder="개봉년도 입력(숫자만 입력)" onChange={onChangeInput} />
          <ButtonMovie type="submit">확인</ButtonMovie>
        </form>
        <H2Score>맞춘 갯수: {score}</H2Score>
      </DivForm>
    </>
  )
}

export default MovieGame
