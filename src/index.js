import {applyMiddleware, createStore} from 'redux';
import './styles.css';
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {rootReducer} from "./redux/rootReducer";
import {decrement, increment} from "./redux/actions";
import {ASYNC_INCREMENT} from "./redux/types";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// function logger(state) {
//     return function (next) {
//         return function (action) {
//             console.log('State: ', state.getState())
//             console.log('Action: ', action)
//             return next(action)
//         }
//     }
// }

const store = createStore(rootReducer,
    0,
    applyMiddleware(thunk, logger)
);

window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        store.dispatch(increment())
    }, 2000)
})

store.subscribe(() => {
    const state = store.getState();

    counter.textContent = state;
})

store.dispatch({ type: 'INIT_APPLICATION' })

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})

