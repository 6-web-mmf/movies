import { SearchService } from "../service/SearchService.js"
import { initialState } from "../state/state.js"

export class HeaderController{

    #searchService
    #headerElement 

    constructor() {
        this.#searchService = new SearchService()
        this.#headerElement = document.querySelector("header")
    }

    render() {
        const logo = document.createElement("img")
        logo.src = "../static/images/logo.webp"
        logo.classList.add("header__logo")

        const input = document.createElement("input")
        input.placeholder = "Search"
        const rightBlock = document.createElement("div")
        rightBlock.innerHTML += `
            <nav class="header__right">
                <a href="main.html">Home</a>
                <a href="main.html">Movies</a>
                <a href="favorites.html">Favorites</a>
            </nav>
        `
        this.#headerElement.appendChild(logo)
        this.#headerElement.appendChild(input)
        this.#headerElement.appendChild(rightBlock)

        this.#listener()
    }

    #listener = () => {
        document.querySelector("header>input").addEventListener("input", async e => {
            await this.#searchService.search(e.target.value.trim())
            console.log(initialState)
        })
    }
}