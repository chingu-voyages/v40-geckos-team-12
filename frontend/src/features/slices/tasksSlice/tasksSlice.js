import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ id: uuidv4(), ...payload });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    move_from_todo_to_doing: (state, action) => {
      console.log(action.payload);
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.status = "doing";
        }
        return task;
      });
    },
    move_from_doing_to_done: (state, action) => {
      console.log(action.payload);
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.status = "done";
        }
        return task;
      });
    },
    move_from_done_to_todo: (state, action) => {
      console.log(action.payload);
      state.tasks = state.tasks.map((task) => {
        if(task.id === action.payload){
          task.status = "todo"
        }
        return task;
      })
    }
  },
});

export const {
  addTask,
  removeTask,
  move_from_todo_to_doing,
  move_from_doing_to_done,
  move_from_done_to_todo,

} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectDoingTasks = (state) =>
  state.tasks.tasks.filter((task) => task.status === "doing");
export const selectDoneTasks = (state) =>
  state.tasks.tasks.filter((task) => task.status === "done");
export const selectTodoTasks = (state) =>
  state.tasks.tasks.filter((task) => task.status === "todo");

export default tasksSlice.reducer;
