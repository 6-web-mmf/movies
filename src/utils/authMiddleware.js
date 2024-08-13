import { LocalStorageService } from "./LocalStorageService.js";

export const checkIfUserIsLoggedIn = () => {
    const user = LocalStorageService.getItem("user")
    if(window.location.pathname.includes("notFound")){
        return
    }
    if (!user?.email) {
        window.location.replace("auth-login.html")
        return
    } 
}

export const checkIfAuthPage = () => {
    const user = LocalStorageService.getItem("user")
    if (user && window.location.pathname.includes("auth")) {
        window.location.replace("main.html")
        return
    }
}
