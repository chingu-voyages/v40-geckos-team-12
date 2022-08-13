import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [{
    title: "Research pricing points of various competitors and trial different business models",
    description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
    subtasks: ['Research competitor pricing and business models', 'Outline a business model that works for our solution', 'Talk to potential customers about our proposed solution and ask for fair price expectancy'],
    status: "",
  }],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      console.log("tion", payload);
      state.tasks.push({ id: uuidv4(), ...payload });
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
