import React, { useState } from "react";
import { ListContainer, Brand, Container, SpanBoard } from "./Sidebar.styled";
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
  const [position, setPosition] = useState(-1);
  const texts = ['Platform launch', 'Marketing plan', 'Roadmap'];


  const handleClick = (index) => {
    setPosition(index);
    console.log('clicked');
  }

  const handleToggle = () => {
    dispatch(toggleTheme());
  };


  return (
    <>
      <Container>
      <Brand>
        <img
          src={isLightTheme ? darkThemeLogo : lightThemeLogo}
          style={{ color: "white" }}
          alt=""
        />
      </Brand>
      <SpanBoard style={{color: '#828FA3'}}>All boards</SpanBoard>
      <ListContainer>
        {texts.map((item, index) => <div key={index} onClick={() => handleClick(index)} className={index === position ? 'active' : null}><ListItem text={item} svg={iconBoard} /></div>)}
      </ListContainer>
      
      <ToggleSwitch handleToggle={handleToggle} />
      </Container>
    </>
  );
};

export default Sidenav;
