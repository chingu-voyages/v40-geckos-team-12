import React from "react";
import { Card } from "../../components";
import { StyledColumn } from "./Column.styled";

const Column = ({handleCardModalToggle}) => {
  return (
    <StyledColumn>
      <Card handleCardModalToggle={handleCardModalToggle}/>
    </StyledColumn>
  );
};

export default Column;
