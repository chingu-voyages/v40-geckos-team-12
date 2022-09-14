import React from "react";
import { CardContainer, CardTitle, CardSubtask } from "./Card.styled.js";

const Card = ({ handleCardModalToggle, task }) => {

  return (
    <>
      <CardContainer onClick={() => handleCardModalToggle(task)}>
        <CardTitle id="cardtitle">{task.title}</CardTitle>
        <CardSubtask>{task.subtasks.length} Subtask{task.subtasks.length > 1 || task.subtasks.length === 0 ? 's' : ''}</CardSubtask>
      </CardContainer>
    </>
  );
};

export default Card;
