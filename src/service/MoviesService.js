import { initialState } from "../state/state.js"

function cutDescription(description, maxWords) {
    const words = description.split(' ');
    if (words.length <= maxWords) {
        return description;
    } else {
        return words.slice(0, maxWords).join(' ') + '...';
    }
}

export class MoviesService {

    getMovies = () => {
        console.log(initialState.movies);
        return initialState.movies
            .map(movie =>
                `
                <a href="movie.html?id=${movie.id}">
                    <div class="movie">
                        <img class="movie-poster" src=${movie.poster}>
                        <div class="movie-overlay">
                            <div class="movie__info">
                                <h1 class="movie__info-title">${movie.title}</h1>
                                <div class="movie__info__details">
                                    <div class="movie__info__details-rating">
                                        <img src="../static/images/star.png" alt="star">   
                                        ${movie.rating}/10                         
                                    </div>
                                    <p class="movie__info__details-year">${movie.year}</p>
                                    <p class="movie__info__details-duration">${movie.runtime} Min</p>    
                                </div>
                                <p class="movie__info-description">${cutDescription(movie.plot, 15)}</p>
                                <img class="movie__info-favorite" src="../static/images/heart.png" alt="heart">
                            </div>
                        </div>
                    </div>
                </a>
            `)
            .join(' ')
    }
}