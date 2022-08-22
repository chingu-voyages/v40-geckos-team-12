import React from "react";
import {
  NavContainer,
  NavTitle,
  NavButtonWrapper,
  NavButton,
  KebabIcon,
  PlusIcon,
  TaskSpan,
} from "./Navbar.Styled";

const Navbar = ({ setShowAddTaskModal }) => {
  return (
    <NavContainer>
      <NavTitle>Platform Launch</NavTitle>
      <NavButtonWrapper>
        <NavButton onClick={() => setShowAddTaskModal((previous) => !previous)}>
          <PlusIcon/><TaskSpan>+ Add New Task</TaskSpan>
        </NavButton>
        <KebabIcon />
      </NavButtonWrapper>
    </NavContainer>
  );
};

export default Navbar;
