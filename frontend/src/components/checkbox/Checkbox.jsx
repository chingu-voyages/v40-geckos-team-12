import React from "react";
import {
  HiddenCheckBox,
  StyledCheckbox,
  LabelText,
  Label,
} from "../cardModal/CardModal.styled";

const Checkbox = ({ subtask, handleCheck, checked }) => {
  return (
    <Label>
      <HiddenCheckBox onChange={handleCheck} value={subtask} />
      <StyledCheckbox checkActive={checked.includes(subtask) ? true : false} />
      <LabelText checkActive={checked.includes(subtask) ? true : false}>
        {subtask}
      </LabelText>
    </Label>
  );
};

export default Checkbox;
