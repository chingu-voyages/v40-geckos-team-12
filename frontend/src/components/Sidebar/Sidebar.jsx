import React, { useState } from "react";
import { ListContainer, Brand } from "./Sidebar.styled";
import { ListItem, ToggleSwitch } from "../../components";
import lightThemeLogo from "../../assets/logo-light.svg";
import darkThemeLogo from "../../assets/logo-dark.svg";
import { useSelector, useDispatch } from "react-redux";
import '../../css/global.css'

import iconBoard from "../../assets/icon-board.svg";
import {
  toggleTheme,
  selectIsLightTheme,
} from "../../features/slices/themeSlice/themeSlice";

const Sidenav = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const isLightTheme = useSelector(selectIsLightTheme);
  const [position, setPosition] = useState(-1);
  const texts = ['Platform launch', 'Marketing plan', 'Roadmap'];


  const handleClick = (index) => {
    setPosition(index);
  }

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
        {texts.map(

          (item, index) => <ListItem 
          onClick={() => handleClick(index)}
          key={index}
          text={item} svg={iconBoard}
          className={index === position ? 'active' : null}

           />)}
      </ListContainer>
      
      <ToggleSwitch handleToggle={handleToggle} />
    </>
  );
};

export default Sidenav;
