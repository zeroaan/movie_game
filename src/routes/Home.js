import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <div className="home">
        <h1>영화 포스터를 보고 개봉 년도를 맞춰보자!</h1>
        <h3>* 년도만 입력하세요!!! ex) 2019 *</h3>
        <h2>
          시작하려면 맨 위에 <b>Start</b>를 클릭하세요
        </h2>
      </div>
    </div>
  );
};

export default Home;
