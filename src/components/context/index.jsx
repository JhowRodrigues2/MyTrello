import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const MyTrelloContext = createContext({});
import { loadLists } from "../services/api";

const lists = loadLists();

export const MyTrelloContextProvider = ({ children }) => {
  const [dataAPI, setDataAPI] = useState(lists[0].cards);
  const [showTextArea, setShowTextArea] = useState(true);
  const [textCard, setTextCard] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(dataAPI);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDataAPI(items);
  };

  const handleOpenAddCard = () => {
    setShowTextArea(true);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setTextCard(value);
    if (value !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
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
    <MyTrelloContext.Provider
      value={{
        handleDragEnd,
        dataAPI,
        setDataAPI,
        handleOpenAddCard,
        handleAddCard,
        showTextArea,
        setShowTextArea,
        textCard,
        setTextCard,
        handleInputChange,
        isDisabled,
      }}
    >
      {children}
    </MyTrelloContext.Provider>
  );
};
