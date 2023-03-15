import React, {FC} from 'react'
import './equal-btn.scss'
import { useSelector, useDispatch } from '../../services/types/store'
import { RESULT } from '../../services/actions/calculations'

const EqualBtn: FC = () => {
    const { calculation } = useSelector((store) => store.calculations)
    const {isRuntime} = useSelector((store) => store.mode)
    const dispatch = useDispatch()

    const onBtnClick = () => {
        if(isRuntime) {
            try {
                const result = eval(calculation)
                dispatch({
                    type: RESULT,
                    result: isNaN(result) ? "Не определено" : result
                })
            } catch (error) {
                dispatch({
                    type:RESULT,
                    result: "Ошибка"
                })
            }
        }
        
    }

    const className = isRuntime ? "hover" : ""

    return (
        <button className={`equal-btn ${className}`} onClick={onBtnClick}>=</button> 
    )
}

export default EqualBtn;