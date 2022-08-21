import React, { useState } from "react";
import { ListContainer } from "./Sidebar.styled";
import { ListItem, ToggleSwitch } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import iconBoard from "../../assets/icon-board.svg";
import {
  toggleTheme,
  selectIsLightTheme,
} from "../../features/slices/themeSlice/themeSlice";

const Sidenav = () => {
  const dispatch = useDispatch();
  const isLightTheme = useSelector(selectIsLightTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
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
