import React from "react";
import { 
  NavContainer, 
  NavTitle,
  NavButtonWrapper,
  NavButton,
  KebabIcon } from "./Navbar.Styled";

const Navbar = () => {
  return (
    <NavContainer>
        <NavTitle>Platform Launch</NavTitle>
        <NavButtonWrapper>
           <NavButton>+ Add New Task</NavButton>
           <KebabIcon/>
        </NavButtonWrapper>
    </NavContainer>
  );
};

export default Navbar;
