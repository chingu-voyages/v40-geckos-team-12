import React from "react";
import {
  NavContainer,
  NavTitle,
  NavButtonWrapper,
  NavButton,
  KebabIcon,
  ShowSidebar,
} from "./Navbar.Styled";
import lightThemeLogo from "../../assets/logo-light.svg";
import darkThemeLogo from "../../assets/logo-dark.svg";
import { useDispatch, useSelector} from "react-redux";
import {
  selectIsLightTheme, selectIsSidebarOpen, toggleisSidebarOpen
} from "../../features/slices/themeSlice/themeSlice";
import { useEffect } from "react";
import iconShowSidebar from "../../assets/open-sidebar.png"

const Navbar = ({ setShowAddTaskModal }) => {

  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(isSidebarOpen, "width")
  },[isSidebarOpen])

  const isLightTheme = useSelector(selectIsLightTheme);
   const openSidebar = ()=>{
    document.getElementById("sidebar").style.width="350px"
    document.getElementById("sidebar").style.display="block"
    console.log(isSidebarOpen, "is side bar open")
     dispatch(toggleisSidebarOpen(true))
   }
  return (
    <NavContainer>
      {!isSidebarOpen && <ShowSidebar onClick={openSidebar}>
        <img
          src={iconShowSidebar}
          alt="show-sidebar"
        />
      </ShowSidebar>}
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
