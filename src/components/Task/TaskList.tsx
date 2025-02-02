import { CheckSquare, Grid, List } from "react-feather";
import classNames from "../../utils/classNames";
import { Task } from "./interface.d";
import TaskItem from "./TaskItem";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { slices } from "../../redux";

export type TaskDisplay = "list" | "grid";
export interface TaskListProps {
  data?: Task[];
  display?: TaskDisplay;
}

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
  const { display = "list" } = props;
  const taskList = useAppSelector(slices.tasks.selectors.selectTaskList);
  const [itemsDisplay, setItemsDisplay] = useState<TaskDisplay>(display);

  const displayOptions = Object.keys(TASK_DISPLAY) as TaskDisplay[];

  useEffect(() => {
    setItemsDisplay(display);
  }, [display]);

  const taskData = useMemo(() => {
    return taskList;
  }, [taskList]);

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
        {taskData?.length ? (
          taskData.map((task: Task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p className="py-10 flex items-center justify-center text-gray-500">
            No tasks found
          </p>
        )}
      </div>
    </>
  );
};

export default TaskList;
