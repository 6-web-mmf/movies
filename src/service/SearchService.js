import { MovieApi } from "../api/MovieApi.js"
import { initialState } from "../state/state.js"

export class SearchService {

    search = async query => {
        initialState.movies = await MovieApi.getMoviesByQuery(query)
    }
}