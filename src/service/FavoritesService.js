import { initialState } from "../state/state.js"
import {LocalStorageService} from "../utils/LocalStorageService.js";
import {moviesToHtml} from "../utils/moviesToHtml.js"

export class FavoritesService {

    static getFavMoviesByUsername = uname => {
        return moviesToHtml(
            FavoritesService.getFavMoviesListByUsername(uname)
        )
    }

    static getFavMoviesListByUsername = uname => {
        let favMovies

        try {
            favMovies = LocalStorageService.getItem("userFavFilms")[uname] || Array()
        } catch (e) {
            favMovies = []
        }

        return initialState.movies.filter(movie => favMovies.indexOf(movie.id) !== -1)
    }

    static addFavMovie = (username, filmId) => {
        const userFavFilms = LocalStorageService.getItem("userFavFilms") || {}

        if (!userFavFilms[username]) {
            userFavFilms[username] = [filmId]
        } else {
            userFavFilms[username].push(filmId)
            userFavFilms[username] = Array.from(new Set(userFavFilms[username]))
        }

        LocalStorageService.setItem("userFavFilms", userFavFilms)
    }

    static removeFavMovie = (username, filmId) => {
        const userFavFilms = LocalStorageService.getItem("userFavFilms") || {}

        const films = new Set(userFavFilms[username])
        films.delete(filmId)
        userFavFilms[username] = Array.from(films)

        LocalStorageService.setItem("userFavFilms", userFavFilms)
    }
}