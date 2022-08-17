import Navbar from "./components/Navbar/Navbar";

import React, { useState } from "react";
import { Column, CardModal } from "./components";
import { Form } from "./components";

import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import { selectIsLightTheme } from "./features/slices/themeSlice/themeSlice";

import {
  selectTodoTasks,
  selectDoingTasks,
  selectDoneTasks,
} from "./features/slices/tasksSlice/tasksSlice";
import { toggleTheme } from "./features/slices/themeSlice/themeSlice";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);
  const [cardModalToggle, setCardModalToggle] = useState(false);
  const [modalTask, setModaltask] = useState({});

  const todoTasks = useSelector(selectTodoTasks);
  const doingTasks = useSelector(selectDoingTasks);
  const doneTasks = useSelector(selectDoneTasks);

  function handleCardModalToggle(task) {
    setModaltask(task);
    setCardModalToggle(!cardModalToggle);
  }

  console.log(cardModalToggle, "cardModal")
  return (
    <>
      <div>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>

          <div style={{display:"flex"}}>
            <div>sidebar</div>
            <Navbar cardModalToggle={cardModalToggle} />
          </div>
          <Column
            tasks={todoTasks}
            handleCardModalToggle={handleCardModalToggle}
          />
          <Column
            tasks={doingTasks}
            handleCardModalToggle={handleCardModalToggle}
          />
          <Column
            handleCardModalToggle={handleCardModalToggle}
            tasks={doneTasks}
          />

          {cardModalToggle && (
            <CardModal
              modalTask={modalTask}
              handleCardModalToggle={handleCardModalToggle}
              cardModalToggle={cardModalToggle}
            />
          )}
          <Form />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
