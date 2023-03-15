import React, {FC} from 'react'
import './number-pad.scss'
import { useSelector, useDispatch } from '../../services/types/store'
import { ADD_NUMBER } from '../../services/actions/calculations'

const NumberPad: FC = () => {
    const { isRuntime } = useSelector((store) => store.mode)
    const dispatch = useDispatch()

    const className = isRuntime ? "hover" : ""

    const onNumberClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        if(isRuntime)
            dispatch({
                type: ADD_NUMBER,
                operation: e.currentTarget.textContent || ""
            })
    }

    return (
        <ul className='number-pad-container'>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>7</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>8</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>9</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>4</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>5</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>6</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>1</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>2</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>3</li>
            <li className={`number number--0 ${className}`} onClick={e => onNumberClick(e)}>0</li>
            <li className={`number ${className}`} onClick={e => onNumberClick(e)}>.</li>
        </ul>
    )
}

export default NumberPad