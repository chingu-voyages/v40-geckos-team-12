import React from "react";
import { useSelector } from "react-redux";
import { CheckBox } from "../../components";
import { selectTasks } from "features/slices/tasksSlice/tasksSlice";

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

const tasks = useSelector(selectTasks);

// state for the checkboxes
const [checked, setChecked] = React.useState([]);

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
                    <CardTitle>Card Title</CardTitle>
                    <KebabIcon/>
                    </TitleKebabContainer>
                    <CardDescription>We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</CardDescription>
                    <SubTaskTitle>Subtasks (2 of 3)</SubTaskTitle>
                    <SubTaskContainer>
                        {tasks.map((task, index) => <CheckBox task={task} key={index} handleCheck={handleCheck} checked={checked} />)}
                    </SubTaskContainer>
                    <StatusContainer>
                        <StyledLabel text="Status">Current Status</StyledLabel>
                        <StyledSelect>
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