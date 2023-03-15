import React, {FC} from "react";
import './operations.scss'
import { useSelector, useDispatch } from "../../services/types/store";
import { ADD_OPERATION } from "../../services/actions/calculations";

const Operations: FC = () => {
    const {isRuntime} = useSelector((store) => store.mode)
    const dispatch = useDispatch()

    const className = isRuntime ? "hover" : ""

    const onOperationClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        if(isRuntime)
            dispatch({
                type: ADD_OPERATION,
                operation: e.currentTarget.textContent || ""
            })
    }

    return (
        <div className="operations-container">
            <span className={`operation ${className}`} onClick={e => onOperationClick(e)}>/</span>
            <span className={`operation ${className}`} onClick={e => onOperationClick(e)}>*</span>
            <span className={`operation ${className}`} onClick={e => onOperationClick(e)}>-</span>
            <span className={`operation ${className}`} onClick={e => onOperationClick(e)}>+</span>
        </div>
    )
}

export default Operations