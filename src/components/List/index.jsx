import React, { useState } from "react";
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
import { v4 as uuid } from "uuid";

export default function List({ data }) {
  const [dataAPI, setDataAPI] = useState(data.cards);
  const [showTextArea, setShowTextArea] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(dataAPI);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDataAPI(items);
  };
  const add = {
    id: uuid(),
    content: "Teste",
    labels: ["#54e1f7"],
    user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
  };

  const handleAddCard = () => {
    //setDataAPI([...dataAPI, add]);
    setShowTextArea(true);
  };

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
            />
            <div className="btarea">
              <AddCard> Adicionar Cartão</AddCard>

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
        <OpenAddCard type="button" onClick={handleAddCard}>
          <MdAdd size={24} color="#5e6c84" />
          Adicionar lista
        </OpenAddCard>
      ) : (
        ""
      )}
    </ListContainer>
  );
}
