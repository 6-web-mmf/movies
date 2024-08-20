import { AuthController } from "./controller/AuthController.js";
import { CategoryController } from "./controller/CategoryController.js";
import { HeaderController } from "./controller/HeaderController.js";
import { MoviesController } from "./controller/MoviesController.js";
import { MoviePageController } from "./controller/MoviePageController.js";
import { NotFoundController } from "./controller/NotFoundController.js";
import { checkIfAuthPage, checkIfUserIsLoggedIn } from "./utils/authMiddleware.js";

if (window.location.pathname.includes("notFound")) {
    const notFoundController = new NotFoundController()
    notFoundController.render()
}

if (!window.location.pathname.includes("auth")) {
    checkIfUserIsLoggedIn()
    const headerController = new HeaderController()
    headerController.render()
} else {
    checkIfAuthPage()
    const authController = new AuthController()
    authController.handleAuth()
}

if (window.location.pathname.includes("movie")) {
    const moviePageController = new MoviePageController();
    moviePageController.render();
}

if (window.location.pathname.includes("main")) {
    const categoryController = new CategoryController()
    const moviesController = new MoviesController()
    categoryController.render()
    moviesController.render( )
}
