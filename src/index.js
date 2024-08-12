import { CategoryController } from "./controller/CategoryController.js";
import { HeaderController } from "./controller/HeaderController.js";

const headerController = new HeaderController()

headerController.render()

if (window.location.pathname.includes("main")) {
    const categoryController = new CategoryController()
    categoryController.render()
}
