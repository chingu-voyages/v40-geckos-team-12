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

  const [cardModalToggle, setCardModalToggle] = React.useState(false);

  function handleCardModalToggle(){
    setCardModalToggle(!cardModalToggle)
  }

  return (
    <>
      <div style={{ display: "grid" }}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <Column handleCardModalToggle={handleCardModalToggle}/>
          <Column handleCardModalToggle={handleCardModalToggle}/>
          <Column handleCardModalToggle={handleCardModalToggle}/>
          {cardModalToggle && <CardModal handleCardModalToggle={handleCardModalToggle} cardModalToggle={cardModalToggle} />}
          <Form />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
