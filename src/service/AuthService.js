import { LocalStorageService } from "../utils/LocalStorageService.js"

export class AuthService {
    login = e => {
        const formData = new FormData(e.target)

        const email = formData.get("email")

        const user = LocalStorageService.getItem("users")?.find(user => user.email === email)

          if (!user) {
            throw new Error("No such user with email: " + email)
        }

        const username = user.username

        const password = formData.get("password")

        if (password !== user.password) {
            throw new Error("Password mismatch")
        }

        LocalStorageService.setItem("user", {
            username,
            email,
            password
        })
        window.location.replace("main.html")
    }

    register = e => {
        const formData = new FormData(e.target)

        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        const users = LocalStorageService.getItem("users") || []

        if (users?.find(user => user.email === email)) {
            throw new Error("This user already exists!")
        }

        const user = {
            username, email, password
        }

        LocalStorageService.setItem("user", user)

        LocalStorageService.setItem("users", [...users, user])

        window.location.replace("main.html")
    }

    logout = () => {
        LocalStorageService.removeItem("user")
        window.location.replace("auth-login.html")
    }
}