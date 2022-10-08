import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Notepad from '../Notepad/Notepad';
import './main.css'

const Main = () => {
  return (
    <main>
        {/* <DragDropContext >
            
        </DragDropContext> */}
        <Notepad/>
    </main>
  )
}

export default Main