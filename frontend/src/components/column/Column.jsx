import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components";
import { StyledColumn } from "./Column.styled";
import { ColumnContainer } from "./columnContainer/ColumnContainer.styled"

const Column = ({ handleCardModalToggle, tasks }) => {
  return (
      <StyledColumn>
        {tasks.map((task) => (
          <Card
            key={task.id}
            handleCardModalToggle={handleCardModalToggle}
            task={task}
          />
        ))}
      </StyledColumn>
  );
};

export default Column;
