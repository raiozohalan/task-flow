import { createAppThunk } from "../../createAppThunk";

export const fetchTasksThunk = createAppThunk({
  name: "tasks/fetchTasks",
  asyncFn: async ({ taskID }: { taskID: string }) => {
    const result = await fetch(`/api/tasks/${taskID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.json();
  },
});
