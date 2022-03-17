import React from "react";
import './secondCmt.scss'
import {CardTask} from "../Card/Card";
import {cardArr} from "../../common/cardArr";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {ArticleCmt} from "../ArticleCmt/ArticleCmt";
import {article} from "../../common/articleObj";

export const SecondCmt = () => {
  const grid = 3;

  const getItemStyle = (draggableStyle) => ({
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    ...draggableStyle
  });

  return (
    <div className="container">
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="task-box"
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              {cardArr.map(({persona, payment, status, id}, index) => (
                <Draggable className='draggable' key={id} draggableId={`${id}`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        provided.draggableProps.style
                      )}
                    >
                      <CardTask
                        userName={persona}
                        paymentSum={payment}
                        statusTask={status}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ArticleCmt
         props={article}
      />
    </div>
  );
}