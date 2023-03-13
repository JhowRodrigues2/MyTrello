import React, { useState } from "react";
import { ListContainer } from "./style";
import { MdAdd } from "react-icons/md";
import Card from "../Card";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";

export default function List({ data }) {
  const [dataAPI, setDataAPI] = useState(data.cards);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(dataAPI);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDataAPI(items);
  };
  return (
    <ListContainer done={data.done}>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={"list"}>
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {dataAPI.map((card, index) => {
                return (
                  <Draggable
                    key={card.id}
                    draggableId={card.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card key={card.id} data={card} />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </ListContainer>
  );
}
