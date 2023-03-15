export const SET_IS_RUNTIME: "SET_IS_RUNTIME" = "SET_IS_RUNTIME"
export const SET_IS_CONSTRUCTOR: "SET_IS_CONSTRUCTOR" = "SET_IS_CONSTRUCTOR"

export interface ISetIsRuntime {
    readonly type: typeof SET_IS_RUNTIME;
    readonly isRuntime: boolean
}

export interface ISetIsConstructor {
    readonly type: typeof SET_IS_CONSTRUCTOR;
    readonly isConstructor: boolean
}

export type TModeActions = ISetIsConstructor | ISetIsRuntime