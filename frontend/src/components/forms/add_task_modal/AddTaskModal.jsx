import React from "react";
import { Form } from "../../../components";
import { ModalWrapper } from "../../cardModal/CardModal.styled";

const AddTaskModal = ({ handleCreateTaskModalToggle }) => {
  return (
    <ModalWrapper onClick={handleCreateTaskModalToggle}>
      <Form handleCreateTaskModalToggle={handleCreateTaskModalToggle} />
    </ModalWrapper>
  );
};

export default AddTaskModal;
