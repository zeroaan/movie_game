import { SHUFFLE_MOVIE, PLUS_SCORE, RESET_SCORE } from "../actions/types"
import { moviesData, shuffle } from "data/moviesData"

const initialState = {
  moviesData: moviesData,
  score: 0,
  prevScore: 0,
  bestScore: 0,
}

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

export default movieReducer
