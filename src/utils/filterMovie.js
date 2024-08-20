import { initialState } from "../state/state.js"

export const getMoviesByGenre = (genre) => {
    const prev = initialState.movies.filter(item => item.genre.includes(genre))
    initialState = {...initialState, movies:prev}
}