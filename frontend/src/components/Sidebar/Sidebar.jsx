import React from "react";
import { NavContainer, ListContainer, List, Brand } from "./Sidebar.styled";
import logo from "../../assets/logo-dark.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTheme,
  selectIsLightTheme,
} from "../../features/slices/themeSlice/themeSlice";

const Sidenav = () => {
  const dispatch = useDispatch();
  const isLightTheme = useSelector(selectIsLightTheme);
  return (
    <>
      <Brand>
        <img src={logo} style={{ color: "black" }} alt="" />
      </Brand>
      <ListContainer>
        <List>Platform Launch</List>
        <List>Marketing Plan</List>
        <List>Roadmap</List>
        <button onClick={() => dispatch(toggleTheme())}>Toggle</button>
      </ListContainer>
    </>
  );
};

export default Sidenav;
