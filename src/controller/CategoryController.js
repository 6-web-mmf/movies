import { CategoryService } from "../service/CategoryService.js"

export class CategoryController {

    #categoryService
    #categoriesElement

    constructor() {
        this.#categoryService = new CategoryService()
        this.#categoriesElement = document.querySelector(".categories")
    }

    handleCategory = () => {
        const categoryElements = document.querySelectorAll(".category")
        categoryElements.forEach(category => {
            category.addEventListener('click', () => {
                categoryElements.forEach(category => category.classList.remove('current-category'))
                category.classList.add('current-category')                
            })
        })
    }

    render = () => {
        this.#categoriesElement.innerHTML = this.#categoryService.getCategories()
        const allCategoryElement = this.#categoriesElement.querySelector('.category.all')
        if (allCategoryElement) {
            allCategoryElement.classList.add('current-category')
        }
        this.handleCategory()
    }
}