import { SHUFFLE_MOVIE, PLUS_SCORE, RESET_SCORE } from "./types"

export const shuffleMovie = () => {
  return {
    type: SHUFFLE_MOVIE,
  }
}

export const plusScore = () => {
  return {
    type: PLUS_SCORE,
  }
}

export const resetScore = () => {
  return {
    type: RESET_SCORE,
  }
}
