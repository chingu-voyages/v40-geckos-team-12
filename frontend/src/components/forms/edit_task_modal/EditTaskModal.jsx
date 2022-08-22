import React from "react";
import { EditForm } from "../../../components";
import { ModalWrapper } from "../../cardModal/CardModal.styled";

const EditTaskModal = ({ handleEditTaskModalToggle }) => {
  return (
    <ModalWrapper onClick={handleEditTaskModalToggle}>
      <EditForm handleEditTaskModalToggle={handleEditTaskModalToggle} />
    </ModalWrapper>
  );
};

export default EditTaskModal;
