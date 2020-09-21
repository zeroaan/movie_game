import React, { useState } from "react";
import "./Movies.css";

const movies = [
  {
    id: 1,
    title: "기생충",
    year: 2019,
    poster:
      "https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg",
  },
  {
    id: 2,
    title: "명량",
    year: 2014,
    poster:
      "https://movie-phinf.pstatic.net/20140721_186/1405911310756Tt2X1_JPEG/movie_image.jpg",
  },
  {
    id: 3,
    title: "테넷",
    year: 2020,
    poster:
      "https://movie-phinf.pstatic.net/20200728_86/15959209130236RePy_JPEG/movie_image.jpg",
  },
  {
    id: 4,
    title: "강철비",
    year: 2017,
    poster:
      "https://movie-phinf.pstatic.net/20171129_216/1511931096509Q0hpu_JPEG/movie_image.jpg",
  },
  {
    id: 5,
    title: "변호인",
    year: 2013,
    poster:
      "https://movie-phinf.pstatic.net/20131203_145/1386034788519v2Vwy_JPEG/movie_image.jpg",
  },
  {
    id: 6,
    title: "국제시장",
    year: 2014,
    poster:
      "https://movie-phinf.pstatic.net/20141124_107/141679124450580TTS_JPEG/movie_image.jpg",
  },
  {
    id: 7,
    title: "베테랑",
    year: 2015,
    poster:
      "https://movie-phinf.pstatic.net/20150622_131/14349365467550iQnC_JPEG/movie_image.jpg",
  },
  {
    id: 8,
    title: "도둑들",
    year: 2012,
    poster:
      "https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg",
  },
  {
    id: 9,
    title: "전우치",
    year: 2009,
    poster:
      "https://movie-phinf.pstatic.net/20111223_249/1324598282916rToPJ_JPEG/movie_image.jpg",
  },
  {
    id: 10,
    title: "검사외전",
    year: 2016,
    poster:
      "https://movie-phinf.pstatic.net/20160112_146/1452573577623EyUOh_JPEG/movie_image.jpg",
  },
  {
    id: 11,
    title: "럭키",
    year: 2016,
    poster:
      "https://movie-phinf.pstatic.net/20160920_197/1474334630845OPmlV_JPEG/movie_image.jpg",
  },
  {
    id: 12,
    title: "완벽한 타인",
    year: 2018,
    poster:
      "https://movie-phinf.pstatic.net/20181106_289/1541478936071tmadh_JPEG/movie_image.jpg",
  },
  {
    id: 13,
    title: "엑시트",
    year: 2019,
    poster:
      "https://movie-phinf.pstatic.net/20190724_161/1563931152464tk11A_JPEG/movie_image.jpg",
  },
  {
    id: 14,
    title: "극한직업",
    year: 2019,
    poster:
      "https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg",
  },
  {
    id: 15,
    title: "7번방의 선물",
    year: 2013,
    poster:
      "https://movie-phinf.pstatic.net/20130118_115/1358472020816kP4vN_JPEG/movie_image.jpg",
  },
  {
    id: 16,
    title: "써니",
    year: 2011,
    poster:
      "https://movie-phinf.pstatic.net/20111223_71/1324635483880NQEfk_JPEG/movie_image.jpg",
  },
  {
    id: 17,
    title: "과속스캔들",
    year: 2008,
    poster:
      "https://movie-phinf.pstatic.net/20111223_14/1324584883775HhKfa_JPEG/movie_image.jpg",
  },
  {
    id: 18,
    title: "미녀는 괴로워",
    year: 2006,
    poster:
      "https://movie-phinf.pstatic.net/20111222_283/1324561166934KJyL7_JPEG/movie_image.jpg",
  },
  {
    id: 19,
    title: "국가대표",
    year: 2009,
    poster:
      "https://movie-phinf.pstatic.net/20120103_32/1325584763019wyepw_JPEG/movie_image.jpg",
  },
  {
    id: 20,
    title: "우리 생애 최고의 순간",
    year: 2008,
    poster:
      "https://movie-phinf.pstatic.net/20111223_44/1324567143749EUxfp_JPEG/movie_image.jpg",
  },
  {
    id: 21,
    title: "어벤져스: 엔드게임",
    year: 2019,
    poster:
      "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg",
  },
  {
    id: 22,
    title: "아이언맨",
    year: 2008,
    poster:
      "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg",
  },
  {
    id: 23,
    title: "퍼스트 어벤져",
    year: 2011,
    poster:
      "https://movie-phinf.pstatic.net/20111223_44/1324635585945KDOJ5_JPEG/movie_image.jpg",
  },
  {
    id: 24,
    title: "토르: 다크 월드",
    year: 2013,
    poster:
      "https://movie-phinf.pstatic.net/20130930_95/1380517012698Dpvj5_JPEG/movie_image.jpg",
  },
  {
    id: 25,
    title: "가디언즈 오브 갤럭시",
    year: 2014,
    poster:
      "https://movie-phinf.pstatic.net/20170811_107/1502432301446njv93_JPEG/movie_image.jpg",
  },
  {
    id: 26,
    title: "앤트맨",
    year: 2015,
    poster:
      "https://movie-phinf.pstatic.net/20150723_140/1437613988558Y8rfz_JPEG/movie_image.jpg",
  },
  {
    id: 27,
    title: "닥터 스트레인지",
    year: 2016,
    poster:
      "https://movie-phinf.pstatic.net/20161014_50/147640824152266AVn_JPEG/movie_image.jpg",
  },
  {
    id: 28,
    title: "블랙 팬서",
    year: 2018,
    poster:
      "https://movie-phinf.pstatic.net/20180103_128/1514946690065uYxwW_JPEG/movie_image.jpg",
  },
  {
    id: 29,
    title: "캡틴 아메리카: 시빌 워",
    year: 2016,
    poster:
      "https://movie-phinf.pstatic.net/20160427_273/1461725031863moaJw_JPEG/movie_image.jpg",
  },
  {
    id: 30,
    title: "아이언맨 3",
    year: 2013,
    poster:
      "https://movie-phinf.pstatic.net/20130311_165/13629835475487aDfz_JPEG/movie_image.jpg",
  },
  {
    id: 31,
    title: "캡틴 아메리카: 윈터 솔져",
    year: 2014,
    poster:
      "https://movie-phinf.pstatic.net/20140320_56/1395301906218FkBsV_JPEG/movie_image.jpg",
  },
  {
    id: 32,
    title: "뮬란",
    year: 2020,
    poster:
      "https://movie-phinf.pstatic.net/20200827_174/1598496595000hDi9H_JPEG/movie_image.jpg",
  },
  {
    id: 33,
    title: "인랑",
    year: 2018,
    poster:
      "https://movie-phinf.pstatic.net/20180530_139/1527644339969WkMqB_JPEG/movie_image.jpg",
  },
  {
    id: 34,
    title: "좋은 놈, 나쁜 놈, 이상한 놈",
    year: 2008,
    poster:
      "https://movie-phinf.pstatic.net/20111223_118/1324581729893NUDzH_JPEG/movie_image.jpg",
  },
  {
    id: 35,
    title: "밀정",
    year: 2016,
    poster:
      "https://movie-phinf.pstatic.net/20160823_114/1471936485192cjjcD_JPEG/movie_image.jpg",
  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
let items = shuffle(movies);
let count = 0;

const Movies = () => {
  const [value, setValue] = useState("");
  const [movie, setMovie] = useState(items[count]);

  return (
    <div className="App">
      <h1 className="title">{movie.title}</h1>
      <img
        className="movie__poster"
        src={movie.poster}
        alt={movie.title}
        title={movie.title}
      />
      <form>
        <input
          className="movie__year__input"
          type="text"
          value={value}
          placeholder="개봉년도 입력"
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
      <h2>맞춘 갯수: {count}</h2>
    </div>
  );
};

export default Movies;