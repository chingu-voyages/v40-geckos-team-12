import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: 0,
      title: "",
      description: "",
      subTasks: [{}],
      todo: true,
      doing: false,
      done: false,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: uuidv4() });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    move_from_todo_to_doing: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.todo = false;
          task.doing = true;
        }
        return task;
      });
    },
    move_from_doing_to_done: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.doing = false;
          task.done = true;
        }
        return task;
      });
    },
  },
});

export const {
  addTask,
  removeTask,
  move_from_todo_to_doing,
  move_from_doing_to_done,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;
