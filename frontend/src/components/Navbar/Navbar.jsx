import React from "react";
import { useSelector } from "react-redux";
import lightThemeLogo from "../../assets/logo-light.svg";
import darkThemeLogo from "../../assets/logo-dark.svg";
import { selectIsLightTheme } from "../../features/slices/themeSlice/themeSlice";
import {
  NavContainer,
  NavTitle,
  NavButtonWrapper,
  NavButton,
  KebabIcon,
  Brand
} from "./Navbar.Styled";

const Navbar = ({ setShowAddTaskModal }) => {

  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <NavContainer>
      <Brand style={{}}>
        <img
          src={isLightTheme ? darkThemeLogo : lightThemeLogo}
          style={{ color: "white" }}
          alt=""
        />
      </Brand>
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
