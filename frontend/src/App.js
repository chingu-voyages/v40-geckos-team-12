import React from "react";
import { Column } from "./components";
import Navbar from './components/navigation/Navbar';
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import { selectIsLightTheme } from "./features/slices/themeSlice/themeSlice";

import { toggleTheme } from "./features/slices/themeSlice/themeSlice";

function App() {
  const dispatch = useDispatch();
  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <>
      <div style={{ display: "grid" }}>
        <button onClick={() => dispatch(toggleTheme())}>Toggle</button>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <div>sidebar</div>
          <Navbar />
          <Column />
          <Column />
          <Column />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
