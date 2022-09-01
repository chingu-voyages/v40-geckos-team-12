import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "features/slices/tasksSlice/tasksSlice";
import axios from "axios";

import {
  LabelInputContainer,
  StyledFormContainer,
  StyledInput,
  StyledLabel,
  StyledTextArea,
  StyledSelect,
  StyledOption,
  StyledButton,
  StyledFormHeader,
  StyledForm,
} from "../Form.styled";
const Form = ({ handleCreateTaskModalToggle }) => {
  const [newTaskData, setNewTaskData] = useState({
    title: "",
    description: "",
    subtasks: [],
    status: "",
  });

  const [subTask, setSubTask] = useState("");
  const dispatch = useDispatch();
  const handleSubTask = () => {
    setNewTaskData({
      ...newTaskData,
      subtasks: [...newTaskData.subtasks, subTask],
    });
    setSubTask("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/tasks`,
        newTaskData
      );
      dispatch(addTask(data));
    } catch (error) {
      console.log(error);
    }

    setNewTaskData({
      title: "",
      description: "",
      subtasks: [],
      status: "",
    });
    handleCreateTaskModalToggle();
  };

  return (
    <StyledFormContainer onClick={(e) => e.stopPropagation()}>
      <StyledFormHeader>Add New Tasks</StyledFormHeader>
      <StyledForm onSubmit={handleSubmit}>
        <LabelInputContainer>
          <StyledLabel>Title</StyledLabel>
          <StyledInput
            type="text"
            value={newTaskData.title}
            onChange={(e) => {
              setNewTaskData({ ...newTaskData, title: e.target.value });
            }}
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea
            value={newTaskData.description}
            onChange={(e) => {
              setNewTaskData({ ...newTaskData, description: e.target.value });
            }}
          >
            {newTaskData.description}
          </StyledTextArea>
        </LabelInputContainer>

        <LabelInputContainer>
          <StyledLabel>Subtasks</StyledLabel>
          <StyledInput
            value={subTask}
            onChange={(e) => {
              setSubTask(e.target.value);
            }}
            type="text"
          />
        </LabelInputContainer>

        <StyledButton type="button" onClick={handleSubTask} createTask={false}>
          Add New Subtask
        </StyledButton>

        <LabelInputContainer>
          <StyledLabel text="Status">Status</StyledLabel>
          <StyledSelect
            onChange={(e) => {
              setNewTaskData({ ...newTaskData, status: e.target.value });
            }}
          >
            <StyledOption value={""}>Select</StyledOption>
            <StyledOption value={"todo"}>Todo</StyledOption>
            <StyledOption value={"doing"}>Doing</StyledOption>
            <StyledOption value={"done"}>Done</StyledOption>
          </StyledSelect>
        </LabelInputContainer>
        <StyledButton createTask={true}>Create Task </StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
