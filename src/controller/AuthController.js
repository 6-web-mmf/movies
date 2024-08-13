import { AuthService } from "../service/AuthService.js"

export class AuthController {

    #authService
    #authForm
    #errors

    constructor() {
        this.#authService = new AuthService()
        this.#authForm = document.querySelector(".auth__form")
        this.#errors = document.querySelector(".errors")
    }

    handleAuth = () => {
        this.#authForm.addEventListener("submit", e => {
            e.preventDefault()
            try {
                if (window.location.pathname.includes("login")) {
                    this.#authService.login(e)
                } else {
                    this.#authService.register(e)
                }
                e.target.reset()
            } catch(err) {
                this.#errors.textContent = err.message
            }
        })
    }

}