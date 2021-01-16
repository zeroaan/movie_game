# 영화 개봉년도 맞추기 게임

- https://zeroaan.github.io/movie_game/
- 기간 : 20년 9월 20일 ~ 9월 23일
- 소개 : React를 이용한 영화 게임으로 hooks 기반으로 만들었다. 페이지는 Home, Moives로 구성되어있고, 게임을 진행하는 컴포넌트에서 state를 생성하여 영화 포스터, 최고점수, 현재점수 등을 변경해주어 게임이 진행된다.

<br>

![screen](./img/screen.gif)

<br>

#### Movie Data

- 네이버 API를 가져와 랜덤으로 영화 포스터를 보여주려 했으나 네이버 API는 검색 query를 필수로 입력해야하기 때문에 이 프로젝트와는 목적이 맞지 않았다.
- 외국 사이트의 영화 API를 가져와 사용해봤지만 외국 사이트다보니 모르는 영화가 너무 많아 게임 진행이 되지 않았다.
- moviesData를 만들어 직접 title, year, poster를 입력해주었다.
- 배경, 게임 진행 및 많은 컴포넌트에서 같은 영화 데이터를 사용해야 했기 때문에 전역 상태 관리를 할 수 있는 Redux를 사용하였다.

```javascript
// 약 70개의 영화
{
    "id": 70,
    "title": "더킹",
    "year": 2017,
    "poster": "https://movie-phinf.pstatic.net/20170118_172/1484704779507T3ahF_JPEG/movie_image.jpg"
  },

  // ...
  // ...
  // ...

  {
    "id": 1,
    "title": "기생충",
    "year": 2019,
    "poster": "https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg"
  }
```

<br>

#### Router.js

- react-router-dom을 이용하여 home과 movies 페이지를 구성해주었다.

```jsx
const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/movies" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
```

<br>

#### movieData.js

- shuffle 함수를 만들어서 moviesData에 있는 영화들을 랜덤으로 가져올 수 있도록 하였다.

```javascript
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
```

<br>

#### Movies.js

- 영화를 맞췄을 때와 틀렸을 때를 구분하기 위해서 incorrect state를 만들어 주었으며 false일 때는 게임진행, true일 때는 재도전화면이 보이게 만들었다.

```jsx
const Movies = () => {
  const { score, bestScore } = useSelector((state) => state.movie)

  const [incorrect, setIncorrect] = useState(false)

  return (
    <>
      <H1HighScore>최고 점수: {bestScore}</H1HighScore>
      <H1CurrentScore>현재 점수: {score}</H1CurrentScore>
      {incorrect ? <MovieRestart setIncorrect={setIncorrect} /> : <MovieGame setIncorrect={setIncorrect} />}
    </>
  )
}
```

<br>

#### MovieGame.js

- 입력한 년도가 일치할 경우에는 score를 +1 해주고, 틀렸을 경우에는 moviesData를 섞고 score도 0으로 리셋해주었다.

```jsx
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
```

<br>

#### reducers/movie.js

- SHUFFLE_MOVIE : 위에서 본 shuffle 함수로 영화 데이터 순서 바꿔준다.
- PLUS_SCORE : 입력한 년도가 일치할 경우, 현재 score + 1를 해주고, 현재 score가 bestScore보다 클 경우 bestScore도 바꿔준다.
- RESET_SCORE : 입력한 년도가 틀렸을 경우, score는 0으로 초기화되며, 이전 점수가 저장이 된다.

```js
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLE_MOVIE:
      return { ...state, moviesData: shuffle(state.moviesData) }
    case PLUS_SCORE: {
      let newScore = state.bestScore
      if (state.score >= state.bestScore) {
        newScore = state.score + 1
      }
      return { ...state, score: state.score + 1, bestScore: newScore }
    }
    case RESET_SCORE: {
      return { ...state, score: 0, prevScore: state.score }
    }
    default:
      return state
  }
}
```

<br>

#### 반응형으로 만들어주어 모바일, 태블릿에서도 이용할 수 있도록 하였다.

![responsive](./img/responsive.png)
