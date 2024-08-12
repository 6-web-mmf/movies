export class CounterService {

    #value

    constructor(value) {
        this.#value = value
    }

    increment = () => {
        this.#value += 1
        return this.#value
    }

    decrement = () => {
        this.#value -= 1
        return this.#value
    }

    getValue = () => this.#value
}