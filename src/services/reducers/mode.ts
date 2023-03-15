import { SET_IS_CONSTRUCTOR, SET_IS_RUNTIME, TModeActions } from "../actions/mode";

type TModeState = {
    isRuntime: boolean;
    isConstructor: boolean;
}

const initialState: TModeState = {
    isRuntime: false,
    isConstructor: true
}

export const modeReducer = (state = initialState, action: TModeActions): TModeState => {
    switch(action.type) {
        case SET_IS_RUNTIME: {
            return {
                ...state,
                isConstructor: !action.isRuntime,
                isRuntime: action.isRuntime
            }
        }
        case SET_IS_CONSTRUCTOR: {
            return {
                ...state,
                isConstructor: action.isConstructor,
                isRuntime: !action.isConstructor
            }
        }
        default: {
            return state
        }
    }
}