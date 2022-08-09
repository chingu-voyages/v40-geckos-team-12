import React from "react";
import {
  FormTextArea,
  FormLabel,
  FormInput,
  FormButton,
  FormSelect,
  FormHeader,
} from "../../../components";
import { StyledForm } from "../Form.styled";

import { LabelInputContainer, StyledFormContainer } from "../Form.styled";
const Form = () => {
  return (
    <StyledFormContainer>
      <FormHeader text="Add New Task" />
      <StyledForm>
        <LabelInputContainer>
          <FormLabel text="Title" />
          <FormInput type="text" />
        </LabelInputContainer>

        <LabelInputContainer>
          <FormLabel text="Description" />
          <FormTextArea />
        </LabelInputContainer>

        <LabelInputContainer>
          <FormLabel text="SubTasks" />
          <FormInput type="text" />
          <FormInput type="text" />
        </LabelInputContainer>

        <FormButton createTask={false} text="Add New Subtask" />

        <LabelInputContainer>
          <FormLabel text="Status" />
          <FormSelect />
        </LabelInputContainer>
        <FormButton createTask={true} text="Create Task" />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
