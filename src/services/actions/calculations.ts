export const ADD_OPERATION: "ADD_OPERATION" = "ADD_OPERATION"
export const ADD_NUMBER: "ADD_NUMBER" = "ADD_NUMBER"
export const RESULT: "RESULT" = "RESULT"

export interface IAddOperationAction {
    readonly type: typeof ADD_OPERATION;
    readonly operation: string;
}

export interface IAddNumberAction {
    readonly type: typeof ADD_NUMBER;
    readonly operation: string;
}

export interface IResultAction {
    readonly type: typeof RESULT;
    readonly result: string
}

export type TCalculationActions = IAddOperationAction | IAddNumberAction | IResultAction;