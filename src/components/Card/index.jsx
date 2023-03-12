import React from "react";
import { CardContainer, Label } from "./style";
export default function Card({ data }) {
  return (
    <CardContainer>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      <img
        src="https://avatars.githubusercontent.com/u/107954865?v=4"
        alt=""
      ></img>
    </CardContainer>
  );
}
