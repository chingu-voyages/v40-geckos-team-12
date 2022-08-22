import React from "react";
import Sidenav from "../Sidebar/Sidebar.jsx";
import { Container } from "./sidebarContainer.styled.js";

const SidebarContainer = () => {
  return (
    <Container id="sidebar">
      <Sidenav/>
    </Container>
  );
};

export default SidebarContainer;
