import { MoviesService } from "../service/MoviesService.js"

export class MoviesController {
    #moviesService
    #moviesElement

    constructor(){
        this.#moviesService = new MoviesService()
        this.#moviesElement = document.querySelector(".movies")
    }
    render = () => {
        this.#moviesElement.innerHTML = this.#moviesService.getMovies()
    }
    
}