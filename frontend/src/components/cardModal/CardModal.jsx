import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckBox } from "../../components";
import {
  selectTasks,
  move_from_todo_to_doing,
  move_from_doing_to_done,
} from "features/slices/tasksSlice/tasksSlice";

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
} from "./CardModal.styled.js";

const CardModal = ({ handleCardModalToggle, cardModalToggle, modalTask }) => {
  // Gives us an array of task objects
  const tasks = useSelector(selectTasks);
  // Redux
  const dispatch = useDispatch();
  // Set state based on a specific card/task

  const [currentTask, setCurrentTask] = React.useState(modalTask);

  // updates the task.status state when a dropdown option is selected and dispatches it
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "Doing") {
      setCurrentTask({ ...currentTask, status: e.target.value });

      dispatch(move_from_todo_to_doing(currentTask.id));
    } else if (e.target.value === "Done") {
      setCurrentTask({ ...currentTask, status: e.target.value });
      dispatch(move_from_doing_to_done(currentTask.id));
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

  return (
    <>
      <ModalWrapper
        cardModalToggle={cardModalToggle}
        onClick={handleCardModalToggle}
      >
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <TitleKebabContainer>
            <CardTitle>{currentTask.title}</CardTitle>
            <KebabIcon />
          </TitleKebabContainer>
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
            <StyledSelect value={currentTask.status} onChange={handleChange}>
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
