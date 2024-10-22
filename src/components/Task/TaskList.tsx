import { CheckSquare, Grid, List } from "react-feather";
import classNames from "../../utils/classNames";
import { Task, TaskStatuses } from "./interface.d";
import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";

export type TaskDisplay = "list" | "grid";
export interface TaskListProps {
  data?: Task[];
  display?: TaskDisplay;
}

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const DUMMY_DATA: Task[] = [
  {
    id: "task-1",
    title: "Task 1",
    description: LOREM_IPSUM,
    status: TaskStatuses.PENDING,
    dueDate: new Date(),
  },
  {
    id: "task-2",
    title: "Task 2",
    description: LOREM_IPSUM,
    status: TaskStatuses.PENDING,
    dueDate: new Date(),
  },
  {
    id: "task-3",
    title: "Task 3",
    description: LOREM_IPSUM,
    status: TaskStatuses.PENDING,
    dueDate: new Date(),
  },
];

const TASK_DISPLAY = {
  list: {
    className: "flex flex-col gap-4",
    Icon: List,
  },
  grid: {
    className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
    Icon: Grid,
  },
};

const TABS_CLASSNAMES = classNames(
  "flex justify-end p-2.5 rounded-none bg-gray-300/50 text-gray-500/90",
  "data-[hover]:bg-gray-300/80 data-[hover]:text-black",
  "first:rounded-l-md last:rounded-r-md border focus:outline-none",
  "data-[active='true']:bg-gray-400/50 data-[active='true']:text-black data-[active='true']:border-gray-500"
);

const TaskList = (props: TaskListProps) => {
  const { data = DUMMY_DATA, display = "list" } = props;
  const [itemsDisplay, setItemsDisplay] = useState<TaskDisplay>(display);

  const displayOptions = Object.keys(TASK_DISPLAY) as TaskDisplay[];

  useEffect(() => {
    setItemsDisplay(display);
  }, [display]);

  return (
    <>
      <div className="flex justify-between py-4">
        <h2 className="flex gap-2 items-center text-xl font-bold text-black">
          <CheckSquare /> Tasks
        </h2>
        <div className="hidden md:flex md:justify-between rounded-md overflow-hidden">
          {displayOptions.map((option: TaskDisplay) => {
            const Icon = TASK_DISPLAY[option]?.Icon;
            return (
              <button
                className={TABS_CLASSNAMES}
                onClick={() => setItemsDisplay(option)}
                data-active={itemsDisplay === option}
              >
                <Icon size={14} />
              </button>
            );
          })}
        </div>
      </div>
      <div
        className={classNames(
          TASK_DISPLAY[itemsDisplay]?.className,
          "max-w-full min-w-full"
        )}
      >
        {data.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
