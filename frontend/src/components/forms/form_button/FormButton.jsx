import React from "react";
import { StyledButton } from "../Form.styled";

const FormButton = ({ text, createTask }) => {
  return <StyledButton createTask={createTask}>{text}</StyledButton>;
};

export default FormButton;
