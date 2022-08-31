import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { CheckBox } from "../../components";
import {
  selectTasks,
  move_from_todo_to_doing,
  move_from_doing_to_done,
  removeTask,
  get_single_task,
} from "../../features/slices/tasksSlice/tasksSlice";

import {
  ModalWrapper,
  ModalContainer,
  TitleKebabContainer,
  KebabIcon,
  CardTitle,
  CardDescription,
  SubTaskContainer,
  SubTaskTitle,
  StatusContainer,
  StyledLabel,
  StyledSelect,
  StyledOption,
  EditOrDeleteWrapper,
  EditOrDeleteLabel,
} from "./CardModal.styled.js";

const CardModal = ({
  handleCardModalToggle,
  cardModalToggle,
  modalTask,
  handleEditTaskModalToggle,
}) => {
  // Gives us an array of task objects
  const tasks = useSelector(selectTasks);
  // Redux
  const dispatch = useDispatch();
  // Set state based on a specific card/task

  const [currentTask, setCurrentTask] = useState(modalTask);

  const [openEditModal, setOpenEditModal] = useState(false);

  // updates the task.status state when a dropdown option is selected and dispatches it
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "Doing") {
      setCurrentTask({ ...currentTask, status: e.target.value });
      dispatch(move_from_todo_to_doing(currentTask._id));
    } else if (e.target.value === "Done") {
      setCurrentTask({ ...currentTask, status: e.target.value });
      dispatch(move_from_doing_to_done(currentTask._id));
    }
  };

  // state for the checkboxes
  const [checked, setChecked] = React.useState([]);
  // handles the checkboxes state
  function handleCheck(event) {
    let subTaskStatus = [...checked];

    if (event.target.checked) {
      subTaskStatus = [...checked, event.target.value];
    } else {
      subTaskStatus.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(subTaskStatus);
  }

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:4000/tasks/${id}`);
      dispatch(removeTask(data.id));
    } catch (error) {
      console.log(error);
    }
    setOpenEditModal(false);
    handleCardModalToggle();
  };

  const handleEdit = async (id) => {
    setOpenEditModal(false);
    handleCardModalToggle();
    dispatch(get_single_task(id));
    handleEditTaskModalToggle();
  };

  return (
    <>
      <ModalWrapper
        cardModalToggle={cardModalToggle}
        onClick={handleCardModalToggle}
      >
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <TitleKebabContainer
            onClick={() => setOpenEditModal((previous) => !previous)}
          >
            <CardTitle>{currentTask.title}</CardTitle>
            <KebabIcon />
          </TitleKebabContainer>
          {openEditModal && (
            <EditOrDeleteWrapper>
              <EditOrDeleteLabel onClick={() => handleEdit(currentTask._id)}>
                Edit
              </EditOrDeleteLabel>
              <EditOrDeleteLabel
                onClick={() => handleDelete(currentTask._id)}
                warning
              >
                Delete
              </EditOrDeleteLabel>
            </EditOrDeleteWrapper>
          )}

          <CardDescription>{currentTask.description}</CardDescription>
          <SubTaskTitle>
            Subtasks ({currentTask.subtasks.length} of
            {currentTask.subtasks.length})
          </SubTaskTitle>
          <SubTaskContainer>
            {currentTask.subtasks?.map((subtask, index) => (
              <CheckBox
                subtask={subtask}
                key={index}
                handleCheck={handleCheck}
                checked={checked}
              />
            ))}
          </SubTaskContainer>
          <StatusContainer>
            <StyledLabel text="Status">Current Status</StyledLabel>
            <StyledSelect
              value={currentTask.status}
              onChange={(e) => handleChange(e)}
            >
              <StyledOption>Todo</StyledOption>
              <StyledOption>Doing</StyledOption>
              <StyledOption>Done</StyledOption>
            </StyledSelect>
          </StatusContainer>
        </ModalContainer>
      </ModalWrapper>
    </>
  );
};

export default CardModal;
