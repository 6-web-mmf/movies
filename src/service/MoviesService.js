import { initialState } from "../state/state.js"

export class MoviesService {

    getMovies = () => {
        console.log(initialState.movies);
        return initialState.movies
            .map(movie =>
                `
                <a href="movie.html?id=${movie.id}">
                    <div class="movie">
                        <img class="movie-poster" src=${movie.poster}>
                        <h1 class="movie-title">${movie.title}</h1>
                            <div class="movie__info">
                                <p class="movie__info-year">${movie.year}</p>
                                <div class="movie__info__rating">
                                    <img src="../static/images/star.png">
                                    <p>${movie.rating}</p>    
                                </div>
                            </div>
                    </div>
                </a>
            `)
            .join(' ')
    }
}