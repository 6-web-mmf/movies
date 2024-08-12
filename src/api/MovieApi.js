export class MovieApi {
    static BASE_URL = "https://freetestapi.com/api/v1"

    static getMovies = async () => {
        const response = await fetch(`${this.BASE_URL}/movies`)
        return response.json()
    }

    static getMovieById = async id => {
        const response = await fetch(`${this.BASE_URL}/movies/${id}`)
        return response.json()
    }

    static getMoviesByQuery = async query => {
        const response = await fetch(`${this.BASE_URL}/movies?search=${query}`)
        return response.json()
    }
}