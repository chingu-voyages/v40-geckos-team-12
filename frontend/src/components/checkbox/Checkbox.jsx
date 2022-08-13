import React from 'react'
import { 
    HiddenCheckBox, 
    StyledCheckbox, 
    LabelText, 
    Label, 
} from "../cardModal/CardModal.styled";


const Checkbox = ({task, handleCheck, checked}) => {

const subtasks = task.subtasks;


  return (
   <>    
   {subtasks.length && subtasks.map((subtask, index) => {
    return (
     <Label key={index}>
        <HiddenCheckBox onChange={handleCheck} value={subtask} />
        <StyledCheckbox checkActive={checked.includes(subtask) ? true : false} />
        <LabelText checkActive={checked.includes(subtask) ? true : false} >{subtask}</LabelText>
    </Label>
    )
   })}
   
  
    </>

  )
}

export default Checkbox