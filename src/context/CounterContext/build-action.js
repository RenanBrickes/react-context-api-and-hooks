import { ASYNC_INCREASE_END, ASYNC_INCREASE_ERROR, ASYNC_INCREASE_START, DECREASE, INCRASE, RESET, SETCOUNTER, SETMORE } from "./actions-types"

export const buildAction = (dispatch) => {
    return {
        increase: () => dispatch({ type: INCRASE }),
        decrease: () => dispatch({ type: DECREASE }),
        reset: () => dispatch({ type: RESET }),
        setCounter: (payload) => dispatch({ type: SETCOUNTER, payload }),
        setMore: (number) => dispatch({ type: SETMORE, number }),
        asyncIncrease: () => asyncIncrease(dispatch),
        asyncError: () => asyncError(dispatch)

    }
}

const asyncIncrease = async (dispatch) => {
    dispatch({ type: ASYNC_INCREASE_START });

    return await new Promise((r) => {
        setTimeout(() => {
            dispatch({ type: ASYNC_INCREASE_END });
            r('SOLVED');
        }, 2000)
    });
}

const asyncError = async (dispatch) => {
    dispatch({ type: ASYNC_INCREASE_START });

    return await new Promise((resolver, reject) => {
        setTimeout(() => {
            dispatch({ type: ASYNC_INCREASE_ERROR });
            reject(new Error('Erro simulando uma promise rejeitada.'));
        }, 2000)
    });
}