import { CategoryService } from "../service/CategoryService.js"

export class CategoryController {

    #categoryService
    #categoriesElement

    constructor() {
        this.#categoryService = new CategoryService()
        this.#categoriesElement = document.querySelector(".categories")
    }

    render = () => {
        this.#categoriesElement.innerHTML = this.#categoryService.getCategories()
    }
}