import { combineReducers } from "redux";
import { reducer as tasks } from "./tasks";

export const rootReducer = combineReducers({
  tasks
}); // add other reducers in the future
