import React from "react";
import { CardContainer, CardTitle, CardDescription } from "./Card.styled.js";

const Card = ({ handleCardModalToggle, task }) => {
  return (
    <>
      <CardContainer onClick={() => handleCardModalToggle(task)}>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardContainer>
    </>
  );
};

export default Card;
