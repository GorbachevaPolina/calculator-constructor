import React, {FC} from 'react'
import { useDrag } from 'react-dnd'

type TDraggableComponentProps = {
    children: React.ReactNode;
    id: number;
}

const DraggableComponent: FC<TDraggableComponentProps> = ({children, id}) => {
    const [{isDrag}, dragRef] = useDrag({
        type: "calculator",
        item: {id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })
    
    return (
        !isDrag ? <div ref={dragRef}>
            {children}
        </div> : null
    )
}

export default DraggableComponent