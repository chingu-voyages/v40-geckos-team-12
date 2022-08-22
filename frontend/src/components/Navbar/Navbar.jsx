import React from "react";
import {
  NavContainer,
  NavTitle,
  NavButtonWrapper,
  NavButton,
  KebabIcon,
  PlusIcon,
  TaskSpan,
  LogoIcon,
  TitleContainer,
  IconChevronUp,
  IconChevronDown,
  Chevron,
} from "./Navbar.Styled";

const Navbar = ({ setShowAddTaskModal }) => {
  return (
    <NavContainer>
      <TitleContainer>
        <LogoIcon/>
        <NavTitle>Platform Launch</NavTitle>
        <Chevron>
          <IconChevronDown />
        </Chevron>
      </TitleContainer>
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
