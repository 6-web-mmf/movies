import { CategoryService } from "../service/CategoryService.js"
import {MovieApi} from "../api/MovieApi.js"

export class CategoryController {

    #categoryService
    #categoriesElement

    constructor() {
        this.#categoryService = new CategoryService()
        this.#categoriesElement = document.querySelector(".categories")
    }

    handleCategory = () => {
        const categoryElements = document.querySelectorAll(".category");
        categoryElements.forEach(category => {
            category.addEventListener('click', async (e) => {
                e.preventDefault()
                const genre = e.target.textContent
                const movies = await MovieApi.getMoviesByGenre(genre)
                console.log(movies);
                categoryElements.forEach(cat => cat.classList.remove('current-category'));
                category.classList.add('current-category');

            });
        });
    }

    render = () => {
        this.#categoriesElement.innerHTML = this.#categoryService.getCategories()
        this.handleCategory();
    }
}