import { createSelector } from "reselect";
import { RootState } from "../../store";

export const selectTaskState = (state: RootState) => {
  return state.tasks;
};

export const selectTaskList = createSelector(selectTaskState, (state) => {
  return state.list;
});

export const selectSelectedTask = createSelector(selectTaskState, (state) => {
  return state.selectedTask;
});
