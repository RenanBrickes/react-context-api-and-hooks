import { INCRASE } from "./actions-types"

export const buildAction = (dispatch) => {
    return {
        increase: () => dispatch({ type: INCRASE }),
        
    }
}