export enum TaskStatuses {
  TO_DO = "To Do",
  PENDING = "Pending",
  IN_PROGRESS = "In Progress",
  DONE = "Done",
  IN_REVIEW = "In Review",
  BACKLOG = "Backlog",
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  status?: TaskStatus;
}
