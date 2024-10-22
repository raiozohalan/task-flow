import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "./interface";
import * as thunks from "./thunks";
import { Task } from "../../components/Task/interface";

const initialState: State = {
  list: [],
  selectedTask: null,
};

const slice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskList: (state, { payload }: PayloadAction<Task[]>) => {
      state.list = payload;
    },
    addNewTask: (state, { payload }: PayloadAction<Task>) => {
      state.list = [...state.list, payload];
    },
    deleteTask: (state, { payload }: PayloadAction<{ taskID: string}>) => {
      state.list = state.list.filter((task) => task.id !== payload.taskID);
    },
    updateTask: (state, { payload }: PayloadAction<Task>) => {
      state.list = state.list.map((task) => {
        if (task.id === payload.id) return { ...task, ...payload };
        
        return task;
      });
    },
  },
  // extraReducers(builder) {
  //   // Add extra reducers here
  // },
});

export const reducer = slice.reducer;
export const actions = {
  ...slice.actions,
  ...thunks,
};
