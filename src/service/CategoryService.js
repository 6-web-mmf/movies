import { categoriesList } from "../constants/categories.js";

export class CategoryService {
    getCategories = () => categoriesList.map(item => 
        `<li class="category ${item.title.toLowerCase()}" data-genre="${item.title}">${item.title}</li>`)
        .join(" ")
}