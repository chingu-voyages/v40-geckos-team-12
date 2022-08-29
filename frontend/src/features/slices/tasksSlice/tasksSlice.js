import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
  task: {},
};

//Create an Async Thunk to get all the tasks from the database
export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  const { data } = await axios.get("http://localhost:4000/tasks");

  return data;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    removeTask: (state, { payload }) => {
      console.log(payload);
      state.tasks = state.tasks.filter((task) => task._id !== payload);
    },
    editTask: (state, { payload }) => {
      console.log("payload", payload);
      state.tasks = state.tasks.map((task) => {
        if (task._id === payload._id) {
          return { ...task, ...payload };
        }
        return task;
      });
    },

    move_from_todo_to_doing: (state, action) => {
      console.log("functin running");
      console.log(action.payload);
      state.tasks = state.tasks.map((task) => {
        if (task._id === action.payload) {
          task.status = "doing";
        }
        return task;
      });
    },
    move_from_doing_to_done: (state, action) => {
      console.log(action.payload);
      state.tasks = state.tasks.map((task) => {
        if (task._id === action.payload) {
          task.status = "done";
        }
        return task;
      });
    },
    get_single_task: (state, { payload }) => {
      console.log("payload is here  ", payload);
      state.task = state.tasks.find((task) => task._id === payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, { payload }) => {
      console.log("fulfilled", payload);
      state.tasks = payload;
    });
    builder.addCase(getTasks.rejected, (state, { payload }) => {
      console.log("rejected");
      state.tasks = [];
    });
    builder.addCase(getTasks.pending, (state, { payload }) => {
      console.log("pending");
      state.tasks = [];
    });
  },
});

export const {
  addTask,
  removeTask,
  move_from_todo_to_doing,
  move_from_doing_to_done,
  get_single_task,
  editTask,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectDoingTasks = (state) =>
  state.tasks.tasks.filter((task) => task.status === "doing");
export const selectDoneTasks = (state) =>
  state.tasks.tasks.filter((task) => task.status === "done");
export const selectTodoTasks = (state) =>
  state.tasks.tasks.filter((task) => task.status === "todo");
export const selectSingleTask = (state) => state.tasks.task;

export default tasksSlice.reducer;
