import { combineReducers } from "redux"
import movie from "store/reducers/movie"

const rootReducer = combineReducers({
  movie,
})

export default rootReducer
