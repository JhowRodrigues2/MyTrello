import React from "react";
import { BoardContainer } from "./style";
import List from "../List";
import { loadLists } from "../services/api";

export const lists = loadLists();

export default function Board() {
  return (
    <BoardContainer>
      {lists.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </BoardContainer>
  );
}
