import { number } from "prop-types";
import { ASYNC_INCREASE_END, ASYNC_INCREASE_ERROR, ASYNC_INCREASE_START, DECREASE, INCRASE, RESET, SETCOUNTER, SETMORE } from "./actions-types";
import { initialState } from './index'

export const reducer = (state, action) => {
    console.log("Ação disparada =>" + action.type);
    switch (action.type) {
        case INCRASE:
            return { ...state, counter: state.counter + 1 }
        case DECREASE:
            return { ...state, counter: state.counter - 1 }
        case RESET:
            return { ...initialState }
        case SETCOUNTER:
            return { ...state, ...action.payload }
        case SETMORE:
            // console.log(action.number);
            return { ...state, counter: state.counter + action.number }
        case ASYNC_INCREASE_START:
            return { ...state, loading: true }
        case ASYNC_INCREASE_END:
            return { ...state, loading: false, counter: state.counter + 1 }
        case ASYNC_INCREASE_ERROR:
            return { ...state, loading: false }
        default:
            break;
    }
    return { ...state };
}