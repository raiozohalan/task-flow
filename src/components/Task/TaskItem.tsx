import moment from "moment";
import classNames from "../../utils/classNames";
import { Task, TaskStatuses } from "./interface";
import TaskStatus from "./TaskStatus";
import { Edit2, Trash2 } from "react-feather";
import { useState } from "react";

interface TaskItemProps {
  task: Task;
}

const BUTTON_CLASSNAMES = classNames(
  "p-1.5 rounded-md text-xs aspect-square",
  "bg-transparent text-gray-500 hover:bg-gray-300 hover:border-gray-400 hover:text-black"
);
const TaskItem = (props: TaskItemProps) => {
  const { task } = props;
  const [status, setStatus] = useState<TaskStatuses>(task.status);

  return (
    <div
      key={task.id}
      className={classNames(
        "flex flex-col gap-2 p-4 rounded-md",
        "bg-gray-600/10 text-black",
        "border border-gray-600/20"
      )}
    >
      <div className="flex flex-col-reverse  gap-1 lg:gap-1 lg:flex-row lg:items-center justify-between">
        <div className="flex-1 flex flex-col gap-0">
          <h2 className="text-lg font-bold">{task.title}</h2>

          <span className="text-xs text-gray-500">
            {moment(task.dueDate).format("MMM DD YYYY")}
          </span>
        </div>
        <div className="flex items-center justify-between lg:justify-end gap-1.5">
          <TaskStatus
            status={status}
            onSelect={setStatus}
            showStatusColor
            className={{
              button: classNames(
                "block w-fit lg:full appearance-none rounded-lg border-none ring-0 bg-transparent py-0.5 px-2 text-sm/6 text-gray-900",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-400"
              ),
            }}
          />
          <hr className="hidden lg:block h-4 border-[0.5px] border-gray-400/40" />
          <div className="relative flex gap-1 items-center">
            <button className={BUTTON_CLASSNAMES}>
              <Edit2 size={14} />
            </button>
            <button className={BUTTON_CLASSNAMES}>
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
      <p
        className={classNames(
          "flex-1 truncate line-clamp-2 overflow-hidden",
          "text-xs text-wrap text-justify text-gray-500"
        )}
      >
        {task.description}
      </p>
    </div>
  );
};

export default TaskItem;
