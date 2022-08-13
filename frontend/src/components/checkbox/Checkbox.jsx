import React from 'react'
import { 
    HiddenCheckBox, 
    StyledCheckbox, 
    LabelText, 
    Label, 
} from "../cardModal/CardModal.styled";


const Checkbox = ({task}) => {

    const subtasks = task.subtasks;
    const [check, setCheck] = React.useState(false);

    function handleCheck(){

        setCheck(!check);
        console.log(check);

    }
    

  return (
   <>    
   {subtasks.length && subtasks.map((subtask, index) => {
    return (
     <Label key={index}>
        <HiddenCheckBox />
        <StyledCheckbox onClick={handleCheck} />
        <LabelText>{subtask}</LabelText>
    </Label>
    )
   })}
   
  
    </>

  )
}

export default Checkbox