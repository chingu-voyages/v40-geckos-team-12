import React, { useState } from "react";
import { ListContainer, Brand ,HideSidebar} from "./Sidebar.styled";
import { ListItem, ToggleSwitch } from "../../components";
import lightThemeLogo from "../../assets/logo-light.svg";
import darkThemeLogo from "../../assets/logo-dark.svg";
import { useSelector, useDispatch } from "react-redux";
import '../../css/global.css'

import iconBoard from "../../assets/icon-board.svg";
import {
  toggleTheme,
  toggleisSidebarOpen,
  selectIsLightTheme,
} from "../../features/slices/themeSlice/themeSlice";
import hideSidebar from "../../assets/icon-hide-sidebar.svg"

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



  const closeSidebar = ()=>{
    document.getElementById("sidebar").style.width="0"
    document.getElementById("sidebar").style.display="none"
    dispatch(toggleisSidebarOpen(false));
  }

  return (
    <>
      <Brand style={{ marginBottom: "54px" , w: "100%", display:"block"}}>
        <img
          src={isLightTheme ? darkThemeLogo : lightThemeLogo}
          style={{ color: "white", width: "50%" }}
          alt=""
          
        />
      </Brand>

      <span style={{ color: isLightTheme ? "#000" : "#fff", width:"100%" }}>All boards</span>

      <ListContainer>
        {texts.map((item, index) => <div key={index} onClick={() => handleClick(index)} className={index === position ? 'active' : null}><ListItem text={item} svg={iconBoard} /></div>)}

      </ListContainer>
      
      <ToggleSwitch handleToggle={handleToggle} />
      <HideSidebar onClick={closeSidebar}>
        <img src={hideSidebar} alt="sidebar"/>
        <h4 style={{ color: "#828FA3", fontSize: "15px", margin:"0 7px"}}>Hide Sidebar</h4>
      </HideSidebar>
    </>
  )
};

export default Sidenav;
