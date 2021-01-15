import { SHUFFLE_MOVIE } from "../actions/types"
import { moviesData, shuffle } from "data/moviesData"

const initialState = {
  moviesData: moviesData,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLE_MOVIE:
      return { moviesData: shuffle(state.moviesData) }
    default:
      return state
  }
}

export default movieReducer
