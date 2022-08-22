import React, { useState } from "react";
import {
  Column,
  CardModal,
  SidebarContainer,
  Navbar,
  AddTaskModal,
  EditTaskModal,
} from "./components";
import { MainContainer } from "./components/container/MainContainer.styled";
import { ColumnContainer } from "components/container/ColumnContainer.styled";
import { MasterContainer } from "components/container/MasterContainer.styled";

import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import { selectIsLightTheme } from "./features/slices/themeSlice/themeSlice";

import {
  selectTodoTasks,
  selectDoingTasks,
  selectDoneTasks,
} from "./features/slices/tasksSlice/tasksSlice";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);
  const [cardModalToggle, setCardModalToggle] = useState(false);
  const [modalTask, setModaltask] = useState({});

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

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

  function handleEditTaskModalToggle() {
    setShowEditTaskModal(!showEditTaskModal);
  }
  return (
    <>
      <MasterContainer>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <SidebarContainer />

          <MainContainer>
            <Navbar
              cardModalToggle={cardModalToggle}
              setShowAddTaskModal={setShowAddTaskModal}
            />
            <ColumnContainer>
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
            </ColumnContainer>
          </MainContainer>

          {cardModalToggle && (
            <CardModal
              handleEditTaskModalToggle={handleEditTaskModalToggle}
              modalTask={modalTask}
              handleCardModalToggle={handleCardModalToggle}
              cardModalToggle={cardModalToggle}
            />
          )}
          {showEditTaskModal && (
            <EditTaskModal
              handleEditTaskModalToggle={handleEditTaskModalToggle}
            />
          )}

          {showAddTaskModal && (
            <AddTaskModal
              handleCreateTaskModalToggle={handleCreateTaskModalToggle}
            />
          )}
        </ThemeProvider>
      </MasterContainer>
    </>
  );
}

export default App;
