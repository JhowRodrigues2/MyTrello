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
  const [textCard, setTextCard] = useState("");

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(dataAPI);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDataAPI(items);
  };

  const handleOpenAddCard = () => {
    //setDataAPI([...dataAPI, add]);
    setShowTextArea(true);
  };

  const handleAddCard = () => {
    setDataAPI([
      ...dataAPI,
      {
        id: uuid(),
        content: textCard,
        labels: ["#0079bf"],
        user: "https://api.dicebear.com/5.x/adventurer/svg?seed=Snuggles",
      },
    ]);
    setTextCard("");
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
