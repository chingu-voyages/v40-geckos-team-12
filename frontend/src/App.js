import React, { useState } from "react";
import {
  Column,
  CardModal,
  SidebarContainer,
  Navbar,
  AddTaskModal,
} from "./components";
import { ColumnContainer } from "../src/components/column/columnContainer/ColumnContainer.styled";

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

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const todoTasks = useSelector(selectTodoTasks);
  const doingTasks = useSelector(selectDoingTasks);
  const doneTasks = useSelector(selectDoneTasks);

  function handleCardModalToggle(task) {
    setModaltask(task);
    setCardModalToggle(!cardModalToggle);
  }
  function handleCreateTaskModalToggle() {
    setShowAddTaskModal(!showAddTaskModal);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <SidebarContainer />

          <ColumnContainer>
            <Navbar
              cardModalToggle={cardModalToggle}
              setShowAddTaskModal={setShowAddTaskModal}
            />
            <div style={{ display: "flex" }}>
              <Column
                title="TODO"
                orbColor="#49C4E5"
                tasks={todoTasks}
                handleCardModalToggle={handleCardModalToggle}
              />
              <Column
                title="DOING"
                orbColor="#8471F2"
                tasks={doingTasks}
                handleCardModalToggle={handleCardModalToggle}
              />
              <Column
                title="DONE"
                orbColor="#67E2AE"
                handleCardModalToggle={handleCardModalToggle}
                tasks={doneTasks}
              />
            </div>
          </ColumnContainer>

          {cardModalToggle && (
            <CardModal
              modalTask={modalTask}
              handleCardModalToggle={handleCardModalToggle}
              cardModalToggle={cardModalToggle}
            />
          )}
          {showAddTaskModal && (
            <AddTaskModal
              handleCreateTaskModalToggle={handleCreateTaskModalToggle}
            />
          )}
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
