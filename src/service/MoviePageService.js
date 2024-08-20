import { MovieApi } from "../api/MovieApi.js";
import { initialState } from "../state/state.js";

export class MoviePageService {

    movieInfo = async query => {
        initialState.movies = await MovieApi.getMovieById(query)
    }
}