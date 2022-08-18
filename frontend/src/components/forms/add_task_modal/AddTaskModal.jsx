import React from "react";
import { Form } from "../../../components";
import { ModalWrapper, ModalContainer } from "../../cardModal/CardModal.styled";

const AddTaskModal = ({ handleCreateTaskModalToggle }) => {
  return (
    <ModalWrapper onClick={handleCreateTaskModalToggle}>
      <Form />
    </ModalWrapper>
  );
};

export default AddTaskModal;
