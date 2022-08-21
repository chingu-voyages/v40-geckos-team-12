import React, { useState } from "react";
import { ListContainer, Brand } from "./Sidebar.styled";
import { ListItem, ToggleSwitch } from "../../components";
import lightThemeLogo from "../../assets/logo-light.svg";
import darkThemeLogo from "../../assets/logo-dark.svg";
import { useSelector, useDispatch } from "react-redux";

import iconBoard from "../../assets/icon-board.svg";
import {
  toggleTheme,
  selectIsLightTheme,
} from "../../features/slices/themeSlice/themeSlice";

const Sidenav = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const isLightTheme = useSelector(selectIsLightTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <Brand style={{ marginBottom: "54px" }}>
        <img
          src={isLightTheme ? darkThemeLogo : lightThemeLogo}
          style={{ color: "white" }}
          alt=""
        />
      </Brand>
      <span style={{ color: isLightTheme ? "#000" : "#fff" }}>All boards</span>
      <ListContainer>
        <ListItem text="Platform Launch" svg={iconBoard} />
        <ListItem text="Marketing Plan" svg={iconBoard} />
        <ListItem text="Roadmap" svg={iconBoard} />
      </ListContainer>
      <ToggleSwitch handleToggle={handleToggle} />
    </>
  );
};

export default Sidenav;
