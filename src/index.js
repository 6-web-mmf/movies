import { AuthController } from "./controller/AuthController.js";
import { CategoryController } from "./controller/CategoryController.js";
import { HeaderController } from "./controller/HeaderController.js";
import { checkIfUserIsLoggedIn } from "./utils/authMiddleware.js";

if (!window.location.pathname.includes("auth")) {
    const headerController = new HeaderController()
    headerController.render()
    checkIfUserIsLoggedIn()
} else {
    const authController = new AuthController()
    authController.handleAuth()
}

if (window.location.pathname.includes("main")) {
    const categoryController = new CategoryController()
    categoryController.render()
}
