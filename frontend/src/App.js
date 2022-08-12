import React from "react";
import { Column, CardModal } from "./components";
import { Form } from "./components";
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
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <Column />
          <Column />
          <Column />
          <CardModal />
          <Form />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
