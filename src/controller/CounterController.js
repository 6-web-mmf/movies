import { CounterService } from "../service/CounterService.js"

export class CounterController {

    #counterService
    #valueElement

    constructor() {
        this.#counterService = new CounterService(0)
        this.#valueElement = document.querySelector("span")
    }

    render = () => {
        this.#valueElement.innerHTML = this.#counterService.getValue()
        this.#listeners()
    }

    #listeners = () => {
        document.querySelector(".increment").addEventListener("click", () => {
            this.#valueElement.innerHTML = this.#counterService.increment()
        })
        document.querySelector(".decrement").addEventListener("click", () => {
            this.#valueElement.innerHTML = this.#counterService.decrement()
        })
    }
}