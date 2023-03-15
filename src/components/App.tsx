import React, {useState} from 'react';
import CalculatorLeft from './calculator-left/calculator-left';
import './app.scss'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CalculationInput from './calculation-input/calculation-input';
import Operations from './operations/operations';
import NumberPad from './number-pad/number-pad';
import EqualBtn from './equal-btn/equal-btn';
import DropContainer from './drop-container/drop-container';

function App() {
  const [elements, setElements] = useState([
    {
      component: <CalculationInput />,
      id: 0
    },
    {
      component: <Operations />,
      id: 1
    },
    {
      component: <NumberPad />,
      id: 2
    },
    {
      component: <EqualBtn />,
      id: 3
    }
  ])
  const [draggedElements, setDraggedElements] = useState<{
    component: JSX.Element;
    id: number
  }[]>([])

  const handleDrop = (itemId: {id: number}) => {
    setElements([
      ...elements.filter(element => element.id !== itemId.id)
    ])

    setDraggedElements([
      ...draggedElements,
      ...elements.filter(element => element.id === itemId.id)
    ])
  }

  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <CalculatorLeft elements={elements}/>
        <DropContainer onDropHandler={handleDrop} elements={draggedElements} setElements={setDraggedElements}/>
      </DndProvider>
    </div>
  );
}

export default App;
