import React from "react";
import './calculator-input.scss'
import { useSelector } from "../../services/types/store";

const CalculationInput = () => {
    const {current_input} = useSelector((store) => store.calculations)
    
    return (
        <>
            <input 
                value={current_input} 
                placeholder="0"
                tabIndex={-1}
                className={`number-input`}
                readOnly
            />
        </>
    )
}

export default CalculationInput