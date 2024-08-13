import { initialState } from "../state/state.js"
import { LocalStorageService } from "./LocalStorageService.js"

export const setUserToState = () => {
    initialState.user = LocalStorageService.getItem("user")
}