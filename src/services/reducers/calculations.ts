import { ADD_OPERATION, TCalculationActions, ADD_NUMBER, RESULT } from "../actions/calculations";

type TCalculationState = {
    current_input: string;
    calculation: string;
    last_input_type: string;
    isEndOfInout: boolean;
    result: string
}

const initialState: TCalculationState = {
    current_input: "",
    calculation: "",
    last_input_type: "",
    isEndOfInout: false,
    result: ""
}

export const calculationReducer = (state = initialState, action: TCalculationActions): TCalculationState => {
    switch(action.type) {
        case ADD_OPERATION: {
            return {
                ...initialState,
                current_input: action.operation,
                calculation: state.last_input_type === 'operation' ? 
                    state.calculation.slice(0, -1) : 
                    state.last_input_type === "number" ?
                    state.calculation + action.operation :
                    "",
                last_input_type: "operation"
            }
        }
        case ADD_NUMBER: {
            return {
                ...initialState,
                current_input: state.last_input_type === "number" ? state.current_input + action.operation : action.operation,
                calculation: state.calculation + action.operation,
                last_input_type: "number"
            }
        }
        case RESULT: {
            return {
                ...initialState,
                current_input: action.result,
                isEndOfInout: true,
                result: action.result
            }
        }
        default: {
            return state
        }
    }
}