import React, { useState } from "react";
import axios from "axios";
import iconCross from "../../../assets/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleTask,
  addTask,
  editTask,
} from "../../../features/slices/tasksSlice/tasksSlice";

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

const EditForm = ({ handleEditTaskModalToggle }) => {
  // Gets the single task object from redux
  let singleTask = useSelector(selectSingleTask);

  // Sets the single task state to the single task from redux
  const [taskData, setTaskData] = useState(singleTask);

  // Sets the subtask array to the subTasks state variable.
  const [subTasks, setSubTask] = useState(singleTask.subtasks);

  // This get the value of the last input (adding a new subtask)
  const [newValue, setNewValue] = useState("");
  const dispatch = useDispatch();

  const handleSubTask = () => {
    // Spread whatever is in there and add the newValue to the end of the array.
    setSubTask([...subTasks, newValue]);
    setNewValue("");

    // Updating the task in Redux
  };

  const handleEditedSubTask = (e, index) => {
    e.preventDefault();
    const newSubTasks = [...subTasks];
    newSubTasks[index] = e.target.value;
    setSubTask(newSubTasks);
  };

  const removeSubtask = (index) => {
    const newSubTasks = [...subTasks];
    newSubTasks.splice(index, 1);
    setSubTask(newSubTasks);
  };

  const submitEditTaskForm = async (e, id) => {
    e.preventDefault();
    setTaskData({ ...taskData, subtasks: subTasks });

    try {
      const { data } = await axios.put(`http://localhost:4000/tasks/${id}`, {
        ...taskData,
        subtasks: subTasks,
      });
      dispatch(editTask(data));

      console.log(data);
    } catch {
      console.log("error");
    }

    handleEditTaskModalToggle();

    // send a put request ad update the database with the new task data.
  };
  return (
    <StyledFormContainer onClick={(e) => e.stopPropagation()}>
      <StyledFormHeader>Edit Task</StyledFormHeader>
      <StyledForm onSubmit={(e) => submitEditTaskForm(e, taskData._id)}>
        <LabelInputContainer>
          <StyledLabel>Title</StyledLabel>
          <StyledInput
            type="text"
            value={taskData.title}
            onChange={(e) => {
              setTaskData({ ...taskData, title: e.target.value });
            }}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea
            value={taskData.description}
            onChange={(e) => {
              setTaskData({ ...taskData, description: e.target.value });
            }}
          >
            {taskData.description}
          </StyledTextArea>
        </LabelInputContainer>

        <LabelInputContainer>
          <StyledLabel>Subtasks</StyledLabel>
          {subTasks.length
            ? subTasks.map((text, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <StyledInput
                    value={text}
                    onChange={(e) => handleEditedSubTask(e, index)}
                    type="text"
                  />
                  <div style={{ padding: "0 6px" }}>
                    <img
                      src={iconCross}
                      alt="delete-icon"
                      onClick={() => removeSubtask(index)}
                    />
                  </div>
                </div>
              ))
            : null}

          <StyledInput
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </LabelInputContainer>

        <StyledButton type="button" onClick={handleSubTask} createTask={false}>
          Add New Subtask
        </StyledButton>

        <LabelInputContainer>
          <StyledLabel text="Status">Status</StyledLabel>
          <StyledSelect
            value={taskData.status}
            onChange={(e) => {
              setTaskData({ ...taskData, status: e.target.value });
            }}
          >
            <StyledOption value={""} selected>
              Select
            </StyledOption>
            <StyledOption value={"todo"}>Todo</StyledOption>
            <StyledOption value={"doing"}>Doing</StyledOption>
            <StyledOption value={"done"}>Done</StyledOption>
          </StyledSelect>
        </LabelInputContainer>
        <StyledButton type="submit" createTask={true}>
          Update Task
        </StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default EditForm;
