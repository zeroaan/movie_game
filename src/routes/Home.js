import React from "react";
import "./Home.css";
import movies from "./moviesData";
import { Link } from "react-router-dom";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
let items = shuffle(movies);

const Home = () => {
  return (
    <div className="App">
      <div
        className="movie__background--left"
        style={{
          background: `center/cover no-repeat url(${items[0].poster})`,
          opacity: "0.4",
        }}
      ></div>
      <div
        className="movie__background--right"
        style={{
          background: `center/cover no-repeat url(${items[0].poster})`,
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
  );
};

export default Home;
