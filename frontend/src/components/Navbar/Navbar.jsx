import React from "react";
import {
  NavContainer,
  NavTitle,
  NavButtonWrapper,
  NavButton,
  KebabIcon,
} from "./Navbar.Styled";

const Navbar = ({ setShowAddTaskModal }) => {
  return (
    <NavContainer>
      <NavTitle>Platform Launch</NavTitle>
      <NavButtonWrapper>
        <NavButton onClick={() => setShowAddTaskModal((previous) => !previous)}>
          + Add New Task
        </NavButton>
        <KebabIcon />
      </NavButtonWrapper>
    </NavContainer>
  );
};

export default Navbar;
