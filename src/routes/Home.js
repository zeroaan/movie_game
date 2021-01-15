import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const DivHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > p {
    margin: 10px 0;

    &:nth-child(1) {
      font-size: 32px;
      @media screen and (max-width: 600px) {
        font-size: 22px;
      }
    }

    &:nth-child(2) {
      font-size: 25px;
      color: rgb(255, 50, 50);
      @media screen and (max-width: 600px) {
        font-size: 15px;
      }
    }

    &:nth-child(3) {
      font-size: 28px;
      @media screen and (max-width: 600px) {
        font-size: 18px;
      }

      > a {
        font-size: 35px;
        color: rgb(20, 20, 255);
        @media screen and (max-width: 600px) {
          font-size: 25px;
        }
      }
    }
  }
`

const Home = () => {
  return (
    <>
      <DivHome>
        <p>영화 포스터를 보고 개봉 년도를 맞춰보자!</p>
        <p>* 숫자만 입력하세요!!! ex) 2019 *</p>
        <p>
          시작하려면 <Link to="/movies">Start</Link> 를 클릭하세요
        </p>
      </DivHome>
    </>
  )
}

export default Home
