import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Column,
  CardModal,
  SidebarContainer,
  Navbar,
  AddTaskModal,
  EditTaskModal,
  MobileSidebar,
} from "components";

import {
  ColumnContainer,
  MasterContainer,
  MainContainer,
} from "components/container/Containers.styled";

import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "themes/themes";
import { selectIsLightTheme } from "features/slices/themeSlice/themeSlice";

import {
  selectTodoTasks,
  selectDoingTasks,
  selectDoneTasks,
  getTasks,
} from "features/slices/tasksSlice/tasksSlice";

function Home() {
  const isLightTheme = useSelector(selectIsLightTheme);
  const [cardModalToggle, setCardModalToggle] = useState(false);
  const [modalTask, setModaltask] = useState({});

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const [MobileModalToggle, setMobileModalToggle] = useState(false);

  const todoTasks = useSelector(selectTodoTasks);
  const doingTasks = useSelector(selectDoingTasks);
  const doneTasks = useSelector(selectDoneTasks);
  const dispatch = useDispatch();

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

  function handleMobileModalToggle() {
    setMobileModalToggle(!MobileModalToggle);
  }

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <>
      <MasterContainer>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <SidebarContainer />

          <MainContainer>
            <Navbar
              cardModalToggle={cardModalToggle}
              setShowAddTaskModal={setShowAddTaskModal}
              handleMobileModalToggle={handleMobileModalToggle}
              MobileModalToggle={MobileModalToggle}
            />
            <ColumnContainer>
              {MobileModalToggle && (
                <MobileSidebar MobileModalToggle={MobileModalToggle} />
              )}
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

export default Home;
