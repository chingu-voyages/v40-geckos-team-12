import React from "react";
import { StyledSelect } from "../Form.styled";
import { FormOption } from "../../../components";

const FormSelect = () => {
  return (
    <StyledSelect>
      <FormOption text="Todo" />
      <FormOption text="option one" />
      <FormOption text="option two" />
      <FormOption text="option three" />
    </StyledSelect>
  );
};

export default FormSelect;
