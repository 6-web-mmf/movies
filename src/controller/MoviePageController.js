import { MoviePageService } from "../service/MoviePageService.js"
import { initialState } from "../state/state.js";
import {FavoritesService} from "../service/FavoritesService.js";
import {LocalStorageService} from "../utils/LocalStorageService.js";
import { MoviePhotosList } from "../constants/movies.js";

export class MoviePageController {

    #movieService
    #movieInfo
    #movieId
    #url

    constructor () {
        this.#movieService = new MoviePageService()
        this.#url = new URL(`${window.location.href}`)
    }

    async render () {
        
        this.#movieInfo =await this.listener()
        console.log(this.#movieInfo)
        const bodyElement = document.querySelector('body');
        bodyElement.innerHTML += `
        <div class="background-img">
            <img src="${MoviePhotosList[this.#movieId-1].background}" class='backgroundImg' >
        </div>
        <div class="background-gradient"></div>
        `
        const block = document.querySelector('.wrapper');
        
        document.title = this.#movieInfo.title ;
        console.log(this.#movieInfo.website)
        console.log(`${MoviePhotosList[this.#movieId-1].poster}`)
        block.innerHTML += `
            <h1> ${this.#movieInfo.title} </h1>
            <div class="moviePoster">
                <img src="${MoviePhotosList[this.#movieId-1].poster}"> 
                <p> Rating : ${this.#movieInfo.rating}
            </div>

            <div class="movieInfo"> 
                <p class="infoItem"> <span>Year:</span> ${this.#movieInfo.year} </p>
                <p class="infoItem"> <span>Country:</span> ${this.#movieInfo.country} </p>
                <p class="infoItem"> <span>Genre:</span> ${this.#movieInfo.genre} </p>
                <p class="infoItem"> <span>Awards:</span> ${this.#movieInfo.awards} </p>
                <p class="infoItem"> <span>Earned:</span> ${this.#movieInfo.boxOffice} </p>
                <p class="infoItem"> <span>Duration:</span> ${this.#movieInfo.runtime} </p>
                <p class="infoItem"> <span>Production :</span> ${this.#movieInfo.production} </p>
                <p class="infoItem"> <span>Director:</span> ${this.#movieInfo.director} </p>
                <p class="infoItem"> <span>Actors:</span> ${this.#movieInfo.actors} </p>
                <p class="aboutMovie"> ${this.#movieInfo.plot} </p>
                <a href=" ${this.#movieInfo.website}" class="website"> Checkout official website</a>
                <button class="addFavFilmBtn">Add to favorites</button>
            </div>
            
            <iframe width="1024" height="439" src="https://www.youtube.com/embed/bLvqoHBptjg" title="Forrest Gump - Trailer" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
        this.#addListeners()
    }

    #addListeners = () => {
        document
            .querySelector('.addFavFilmBtn')
            .addEventListener('click', (e) => {
                FavoritesService.addFavMovie(
                    LocalStorageService.getItem("user").username,
                    +(new URLSearchParams(window.location.search).get("id"))
                )

                alert("Film added to favorites")
            })
    }

    async listener () {
        console.log(this.#url.searchParams.get('id'))
        this.#movieId = this.#url.searchParams.get('id');
        const gettingInfo = await this.#movieService.movieInfo(this.#movieId)

        return initialState.movies
    }
 }