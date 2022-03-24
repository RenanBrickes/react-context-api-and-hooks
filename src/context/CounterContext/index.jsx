import { createContext, useContext, useReducer, useRef } from "react";
import p from 'prop-types';
import { reducer } from "./reducer";
import { buildAction } from "./build-action";

export const initialState = {
    counter: 0,
    loading: false
}

const Context = createContext();

export const ConuterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const action = useRef(buildAction(dispatch));

    return <Context.Provider value={[state, action.current]}>{children}</Context.Provider>
};

ConuterContextProvider.propTypes = {
    children: p.node.isRequired
}

export const useCounterContext = () => {
    const context = useContext(Context);

    if (typeof context === "undefined")
        throw new Error("Você deve usar o useCounterContext dentro de ConuterContextProvider")
    return [...context];
}