import React from "react";
import { BoardContainer } from "./style";
import List from "../List";
export default function Board() {
  return (
    <BoardContainer>
      <List />
      <List />
      <List />
      <List />
    </BoardContainer>
  );
}
