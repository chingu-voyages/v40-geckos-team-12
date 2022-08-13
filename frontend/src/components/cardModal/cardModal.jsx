import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckBox } from "../../components";
import { selectTasks, move_from_todo_to_doing, move_from_doing_to_done } from "features/slices/tasksSlice/tasksSlice";

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

const CardModal = () => {

// Gives us an array of task objects
const tasks = useSelector(selectTasks);
// Redux 
const dispatch = useDispatch();
// Set state based on a specific card/task
const [currentTask, setCurrentTask] = React.useState(tasks[0]);
// updates the task.status state when a dropdown option is selected
const handleChange = (e) => {
    e.preventDefault();
    if(e.target.value === 'Doing'){
        dispatch(move_from_todo_to_doing(setCurrentTask({...currentTask, status: e.target.value})))
    } else if (e.target.value === 'Done'){
        dispatch(move_from_doing_to_done(setCurrentTask({...currentTask, status: e.target.value})))
    }
    
};

// state for the checkboxes
const [checked, setChecked] = React.useState([]);
// handles the checkboxes state
function handleCheck(event){
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
            <ModalWrapper>
                <ModalContainer>
                    <TitleKebabContainer>
                    <CardTitle>{currentTask.title}</CardTitle>
                    <KebabIcon/>
                    </TitleKebabContainer>
                    <CardDescription>{currentTask.description}</CardDescription>
                    <SubTaskTitle>Subtasks ({checked.length} of {currentTask.subtasks.length})</SubTaskTitle>
                    <SubTaskContainer>
                        {tasks.map((task, index) => <CheckBox task={task} key={index} handleCheck={handleCheck} checked={checked} />)}
                    </SubTaskContainer>
                    <StatusContainer>
                        <StyledLabel text="Status">Current Status</StyledLabel>
                        <StyledSelect
                        value={currentTask.status}
                        onChange={handleChange}
                        >
                            <StyledOption>Todo</StyledOption>
                            <StyledOption>Doing</StyledOption>
                            <StyledOption>Done</StyledOption>
                        </StyledSelect>
                    </StatusContainer>
                </ModalContainer>
            </ModalWrapper>
        </>
    )
};

export default CardModal;