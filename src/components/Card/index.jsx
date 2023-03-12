import React from "react";
import { CardContainer, Label } from "./style";
export default function Card() {
  return (
    <CardContainer>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer migração</p>
      <img
        src="https://avatars.githubusercontent.com/u/107954865?v=4"
        alt=""
      ></img>
    </CardContainer>
  );
}
