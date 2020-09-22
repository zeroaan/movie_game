import React, { useState } from "react";
import "./Movies.css";
import movies from "./moviesData";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
shuffle(movies);
let items = shuffle(movies);
let count = 0;
let highscore = 0;

const Movies = () => {
  const [value, setValue] = useState("");
  const [movie, setMovie] = useState(items[count]);

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
      <h1 className="title">{movie.title}</h1>
      <img
        className="movie__poster"
        src={movie.poster}
        alt={movie.title}
        title={movie.title}
      />
      <h4 className="movie__highscore">최고 점수: {highscore}</h4>
      <h4 className="movie__currentscore">현재 점수: {count}</h4>
      <form className="movie__form">
        <input
          className="movie__year__input"
          type="text"
          value={value}
          placeholder="개봉년도 입력 (숫자만 입력)"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input
          className="movie__year__button"
          type="submit"
          value="확인"
          onClick={(e) => {
            e.preventDefault();
            if (Number(value) === movie.year) {
              count += 1;
              if (highscore < count) {
                highscore = count;
              }
              setMovie(items[count]);
              setValue("");
            } else {
              items = shuffle(movies);
              count = 0;
              setMovie(items[count]);
              setValue("");
            }
          }}
        />
      </form>
      <h2 className="correct_count">
        맞춘 갯수: <b>{count}</b>
      </h2>
    </div>
  );
};

export default Movies;
