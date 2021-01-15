import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

const DivRestart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  > p {
    margin: 15px 0;

    &:nth-child(1) {
      font-size: 35px;
      @media screen and (max-width: 700px) {
        font-size: 22px;
      }
    }

    &:nth-child(2) {
      font-size: 28px;
      color: rgb(20, 20, 255);
      @media screen and (max-width: 700px) {
        font-size: 20px;
      }
    }

    &:nth-child(3) {
      font-size: 30px;
      color: rgb(255, 50, 50);
      @media screen and (max-width: 700px) {
        font-size: 22px;
      }
    }
  }
`
const ButtonRestart = styled.button`
  font-size: 18px;
  font-family: "Jua", sans-serif;
  width: 80px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 60px;
    height: 40px;
  }
`

const MovieRestart = ({ setIncorrect }) => {
  const { prevScore, bestScore } = useSelector((state) => state.movie)

  const onClickRestart = () => {
    setIncorrect(false)
  }

  return (
    <DivRestart>
      <p>틀렸습니다. 개봉년도가 맞지 않습니다.</p>
      <p>
        맞춘 갯수: {prevScore}
        <br /> 최고 점수: {bestScore}
      </p>
      <p>다시하려면 아래 버튼을 누르세요</p>
      <ButtonRestart onClick={onClickRestart}>다시하기</ButtonRestart>
    </DivRestart>
  )
}

export default MovieRestart
