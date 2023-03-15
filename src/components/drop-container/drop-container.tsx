import React, { FC, useState, useCallback } from "react";
import './drop-container.scss'
import add from '../../images/add-image.png'
import { useDrop } from 'react-dnd'
import ModeSwitch from "../mode-switch/mode-switch";
import DraggableInConstructor from "../draggable-in-constructor/draggable-in-constructor";
import update from 'immutability-helper'
import { useSelector } from "../../services/types/store";

type TDropContainerProps = {
    onDropHandler: (arg: {id: number}) => void;
    elements: {
        component: JSX.Element;
        id: number;
    }[];
    setElements: React.Dispatch<React.SetStateAction<{
        component: JSX.Element;
        id: number;
    }[]>>
}

const DropContainer: FC<TDropContainerProps> = ({onDropHandler, elements, setElements}) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const {isConstructor} = useSelector((store) => store.mode)

    const [{isHover}, dropTarget] = useDrop({
        accept: "calculator",
        drop(itemId: {id: number}) {
            setIsEmpty(false);
            onDropHandler(itemId);
        },
        canDrop(item, monitor) {
            return isConstructor
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        })
    })

    const findElement = useCallback(
        (id: number) => {
            const element = elements.filter((item) => item.id === id)[0]
            if(element) {return {
                element,
                index: elements.indexOf(element)
            }} else return {
                element: elements[0],
                index: 0
            }
        },
        [elements]
    )

    const moveElement = useCallback(
        (id: number, atIndex: number) => {
            const {element, index} = findElement(id)
            setElements(
                update(elements, {
                    $splice: [
                        [index, 1],
                        [atIndex, 0, element]
                    ]
                })
            )
        },
        [findElement, elements, setElements]
    )

    // const [, drop] = useDrop(() => ({accept: "calculator"}))

    const backgroundColor = isHover && isConstructor ? '#dfebff' : 'white'
    const border = isConstructor ? "border" : ""

    return (
        <div className="right-container">
            <ModeSwitch isDone={elements.length === 4}/>
            <div className={`drop-container ${border}`} ref={dropTarget} style={{backgroundColor}}>
                {isEmpty ? isConstructor ? <p>
                    <img src={add} alt="add image icon"/>
                    <span>Перетащите сюда</span>
                    <br />
                    ВСЕ элементы из левой панели
                </p> : null : (
                    elements.map(element => {
                        if(element) {
                            return (
                                <DraggableInConstructor key={element.id} id={element.id} moveElement={moveElement} findElement={findElement}>
                                    {element.component}
                                </DraggableInConstructor>
                                )
                        }
                      })
                )
                }   
            </div>
        </div>
    )
}

export default DropContainer;