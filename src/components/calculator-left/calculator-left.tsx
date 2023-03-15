import React, {FC} from "react";
import DraggableComponent from "../draggable-component/draggable-component";
import './calculator-left.scss'

type TCalculatorLeftProps = {
    elements: {
        component: JSX.Element;
        id: number;
    }[]
}

const CalculatorLeft: FC<TCalculatorLeftProps> = ({elements}) => {

    return (
        <div className="left-container">
            {elements.map(element => {
                return <DraggableComponent id={element.id} key={element.id}>
                    {element.component}
                </DraggableComponent>
            })}
        </div>
    )
}

export default CalculatorLeft