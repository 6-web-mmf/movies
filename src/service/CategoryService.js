import { categoriesList } from "../constants/categories.js";

export class CategoryService {
    getCategories = () => categoriesList.map(item => `<li class="category ${item.class}">${item.title}</li>`).join(" ")
}