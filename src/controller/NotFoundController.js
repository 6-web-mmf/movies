export class NotFoundController {
    #notFoundElement

    constructor() {
        this.#notFoundElement = document.querySelector(".notFoundContainer")
    }

    render() {
        const textContent = document.createElement("div")
        textContent.innerHTML += `
            <h1>404</h1>
            <p>Oops! The page you're looking for isn't here.</p>
        `
        textContent.classList.add("textContent")

        const backBtn = document.createElement("a")
        backBtn.href = "main.html"
        backBtn.textContent = "Go Back Home"
        backBtn.classList.add("backBtn")

        this.#notFoundElement.appendChild(textContent)
        this.#notFoundElement.appendChild(backBtn)
    }
}

