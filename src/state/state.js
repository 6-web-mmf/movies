import {MovieApi} from "../api/MovieApi.js"

export const initialState = {
    movies: await MovieApi.getMovies(),
    user: null
}