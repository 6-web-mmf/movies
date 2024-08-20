import {FavoritesService} from "../service/FavoritesService.js";
import {LocalStorageService} from "../utils/LocalStorageService.js";

export class FavoritesController {
    #favoritesElement

    constructor(){
        this.#favoritesElement = document.querySelector(".movies")
    }
    render = () => {
        const username = LocalStorageService.getItem("user").username
        const films = FavoritesService
            .getFavMoviesByUsername(
                username
            )

        if (films){
            document.querySelector("#delete-div").innerHTML = `
            <div id="delete-div">
                <p>Delete favorite films:</p>
                <select id="fav-films"></select>
                <button id="delete-fav-film">Delete film</button>
            </div>
            `
            this.#favoritesElement.innerHTML = films

            const selectEl = document.querySelector("#fav-films")
            FavoritesService.getFavMoviesListByUsername(username)
                .forEach(movie=>{
                    const opt = document.createElement('option');
                    opt.value = movie.id;
                    opt.innerText = movie.title;
                    selectEl.appendChild(opt);
            })

            document
                .querySelector("#delete-fav-film")
                .addEventListener("click", e =>{
                    console.log("clickled")
                    FavoritesService.removeFavMovie(
                        username,
                        +document.querySelector("#fav-films").value
                    )
                    this.render()
                })
        }
        else {
            document.querySelector("#delete-div").innerHTML = ""
            this.#favoritesElement.innerHTML = "<p class='no-films'>You don't have favorite films :(</p>"
        }
    }
}