import {DECREMENT, INCREMENT} from "./types";

export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(increment())
    }
}
