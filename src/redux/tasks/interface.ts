import { Task } from "../../components/Task/interface";

export interface State {
  list: Task[];
  selectedTask: Task | null;
}
