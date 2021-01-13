import React from "react"
import "./Home.css"
import { moviesData } from "../data/moviesData"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="App">
      <div
        className="movie__background--left"
        style={{
          background: `center/cover no-repeat url(${moviesData[0].poster})`,
          opacity: "0.4",
        }}
      ></div>
      <div
        className="movie__background--right"
        style={{
          background: `center/cover no-repeat url(${moviesData[0].poster})`,
          opacity: "0.4",
        }}
      ></div>
      <div className="home">
        <h1>영화 포스터를 보고 개봉 년도를 맞춰보자!</h1>
        <h3>* 숫자만 입력하세요!!! ex) 2019 *</h3>
        <h2>
          시작하려면{" "}
          <Link to="/movies" className="movie__start">
            Start
          </Link>
          를 클릭하세요
        </h2>
      </div>
    </div>
  )
}

export default Home
