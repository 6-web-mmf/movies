import { LocalStorageService } from "./LocalStorageService.js";

export const checkIfUserIsLoggedIn = () => {
    if (!LocalStorageService.getItem("user")?.email) {
        window.location.replace("auth-login.html")
    }
}
