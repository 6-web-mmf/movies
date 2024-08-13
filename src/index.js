import { CategoryController } from "./controller/CategoryController.js";
import { HeaderController } from "./controller/HeaderController.js";
import { NotFoundController } from "./controller/NotFoundController.js";




if (window.location.pathname.includes("main")) {
    const categoryController = new CategoryController()
    categoryController.render()
}

if (window.location.pathname.includes("notFound")) {
    const notFoundController = new NotFoundController()
    notFoundController.render()
}

