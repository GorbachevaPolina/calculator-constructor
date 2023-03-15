import { combineReducers } from 'redux'
import { calculationReducer } from './calculations'
import { modeReducer } from './mode'

export const rootReducer = combineReducers({
    mode: modeReducer,
    calculations: calculationReducer
})