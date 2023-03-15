import React, {FC, useState} from "react";
import eye from '../../images/view.png'
import bracket from '../../images/bracket.png'
import './mode-switch.scss'
import { useDispatch } from "../../services/types/store";
import { SET_IS_CONSTRUCTOR, SET_IS_RUNTIME } from "../../services/actions/mode";

type TModeProps = {
    isDone: boolean
}

const ModeSwitch: FC<TModeProps> = ({isDone}) => {
    const dispatch = useDispatch()

    const [activeBtn, setActiveBtn] = useState({
        runtime: "inactive",
        constructor: "active"
    })

    const handleBtnClick = (type: string) => {
        if(isDone) {
            if(type === 'runtime') {
                setActiveBtn({
                    runtime: "active",
                    constructor: "inactive"
                })
                dispatch({
                    type: SET_IS_RUNTIME,
                    isRuntime: true
                })
            } else {
                setActiveBtn({
                    runtime: "inactive",
                    constructor: "active"
                })
                dispatch({
                    type: SET_IS_CONSTRUCTOR,
                    isConstructor: true
                })
            }
        }
    }

    return (
        <>
        <div className="mode-switch-container">
            <button className={`mode-btn ${activeBtn.runtime}`} onClick={() => handleBtnClick('runtime')}>
                <img src={eye} alt="eye icon"/>
                <span>Runtime</span>
            </button>
            <button className={`mode-btn ${activeBtn.constructor}`} onClick={() => handleBtnClick('constructor')}>
                <img src={bracket} alt="bracket icon"/>
                <span>Constructor</span>
            </button>
        </div>
        </>
    )
}

export default ModeSwitch;