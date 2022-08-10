import React from "react";
import './style.css'
import { Column, SidebarContainer } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import { selectIsLightTheme } from "./features/slices/themeSlice/themeSlice";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <>
      <div style={{ display: "grid"}}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <SidebarContainer />
          <div>sidebar</div>
          <Column />
          <Column />
          <Column />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
