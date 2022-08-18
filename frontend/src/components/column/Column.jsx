import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components";
import { StyledColumn } from "./Column.styled";
import { ColumnContainer } from "./columnContainer/ColumnContainer.styled";

const Column = ({ title, handleCardModalToggle, tasks, orbColor }) => {
  return (
    <StyledColumn>
      <div style={{ letterSpacing: "1", color: "#828fa3", display: "flex" }}>
        <span
          style={{
            borderRadius: "50%",
            display: "inline-block",
            backgroundColor: orbColor,
            width: "20px",
            height: "20px",
          }}
        ></span>
        <span style={{ marginLeft: "10px" }}> {title} </span>({tasks.length})
      </div>
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
