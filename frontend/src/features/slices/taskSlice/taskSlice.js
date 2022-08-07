import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id,
      title,
      description,
      subTasks: [{ id: name }],
      todo: true,
      doing: false,
      done: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
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
} = taskSlice.actions;

export default taskSlice.reducer;
