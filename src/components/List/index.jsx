import React, { useContext, useState } from "react";
import {
  ListContainer,
  TextAreaContainer,
  CloseAddCard,
  OpenAddCard,
  AddCard,
} from "./style";
import { MdAdd, MdClose } from "react-icons/md";
import Card from "../Card";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { MyTrelloContext } from "../context";

export default function List({ data }) {
  const {
    handleDragEnd,
    dataAPI,
    showTextArea,
    setShowTextArea,
    textCard,
    setTextCard,
    handleOpenAddCard,
    handleAddCard,
  } = useContext(MyTrelloContext);

  return (
    <ListContainer done={data.done}>
      <header>
        <h2>{data.title}</h2>
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
      <div>
        {showTextArea ? (
          <TextAreaContainer>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Insira o texto para esse cartão"
              value={textCard}
              onChange={(e) => setTextCard(e.target.value)}
            />
            <div className="btarea">
              <AddCard onClick={handleAddCard}> Adicionar Cartão</AddCard>

              <CloseAddCard onClick={() => setShowTextArea(false)}>
                <MdClose />
              </CloseAddCard>
            </div>
          </TextAreaContainer>
        ) : (
          ""
        )}
      </div>
      {!showTextArea ? (
        <OpenAddCard type="button" onClick={handleOpenAddCard}>
          <MdAdd size={24} color="#5e6c84" />
          Adicionar lista
        </OpenAddCard>
      ) : (
        ""
      )}
    </ListContainer>
  );
}
