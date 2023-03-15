import React, {FC} from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { useSelector } from '../../services/types/store';

type TDraggableInConstructorProps = {
    children: React.ReactNode;
    id: number;
    moveElement: (id: number, atIndex: number) => void;
    findElement: (id: number) => {
        element: {
            component: JSX.Element;
            id: number;
        };
        index: number;
    }
}

const DraggableInConstructor: FC<TDraggableInConstructorProps> = ({children, id, moveElement, findElement}) => {
    const {isConstructor} = useSelector((store) => store.mode)

    const originalIndex = findElement(id).index;
    const [{isDragging}, drag] = useDrag(
        () => ({
            type: "calculator",
            item: {id, originalIndex},
            canDrag: isConstructor,
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            }),
            end: (item, monitor) => {
                const { id: droppedId, originalIndex } = item;
                const didDrop = monitor.didDrop()
                if(!didDrop) {
                    moveElement(droppedId, originalIndex)
                }
            }
        }),
        [id, originalIndex, moveElement, isConstructor]
    )

    const [, drop] = useDrop(
        () => ({
            accept: "calculator",
            hover({id: draggedId} : {id: number, originalIndex: number}) {
                if(draggedId !== id) {
                    const {index: overIndex} = findElement(id)
                    moveElement(draggedId, overIndex)
                }
            }
        }),
        [findElement, moveElement]
    )

    const opacity = isDragging ? 0.5 : 1

    return (
        <div ref={(node) => drag(drop(node))} style={{opacity}}>
            {children}
        </div>
    )
}

export default DraggableInConstructor