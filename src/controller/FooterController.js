export class FooterController {
    #footerElement
    constructor() {
        this.#footerElement = document.querySelector('footer')
    }

    render = () => {
        const leftFooterText = document.createElement('div')
        leftFooterText.textContent = "ZELVA PRODUCTION"
        leftFooterText.classList.add('leftFooterContent')

        const navFooter = document.createElement('div')
        navFooter.innerHTML += `
            <nav class="footerCenter">
                <a href="main.html">Home</a>
                <a href="main.html">Movies</a>
                <a href="main.html">Favorites</a>
            </nav>
        `

        const iconsFooter = document.createElement("div")
        iconsFooter.classList.add("iconsFooter")
        iconsFooter.innerHTML += `
            <nav class="footerRight">
                <a href="#"><img src="../static/images/footerIcons/github.svg" alt="github"></a>
                <a href="#"><img src="../static/images/footerIcons/discord.svg" alt="discord"></a>
                <a href="#"><img src="../static/images/footerIcons/telegram.svg" alt="telegram"></a>
            </nav>
        `

        this.#footerElement.appendChild(leftFooterText)
        this.#footerElement.appendChild(navFooter)
        this.#footerElement.appendChild(iconsFooter)
    }
}