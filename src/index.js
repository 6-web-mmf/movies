import { CategoryController } from "./controller/CategoryController.js";
import { CounterController } from "./controller/CounterController.js";

const counterController = new CounterController()
const categoryController = new CategoryController()

categoryController.render()
counterController.render()