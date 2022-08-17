import React from "react";
import { NavContainer, NavTitle,NavButtonWrapper,NavButton,NavMenuIcon } from "./Navbar.Styled";
//import {BiDotsVerticalRounded} from "re"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <NavContainer>
        <NavTitle>Platform Launch</NavTitle>
        <NavButtonWrapper>
           <NavButton>+ Add New Task</NavButton>
           <FontAwesomeIcon icon={('faEllipsisVertical')} />
        </NavButtonWrapper>
    </NavContainer>
  );
};

export default Navbar;
