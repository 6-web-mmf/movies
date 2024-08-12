import { categoriesList } from "../constants/categories.js";

export class CategoryService {
    getCategories = () => categoriesList.map(item => `<li>${item.title}</li>`).join(" ")
}