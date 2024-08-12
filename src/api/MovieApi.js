export class MovieApi {
    static BASE_URL = "https://freetestapi.com/api/v1"

    static getMovies = async () => {
        const response = await fetch(`${this.BASE_URL}/movies`)
        return response.json()
    }
}