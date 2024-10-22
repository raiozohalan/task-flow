import { Dispatch, SetStateAction, useMemo } from "react";
import Dropdown from "../base/dropdown";
import { TASK_STATUSES } from "./statuts.const";
import classNames from "../../utils/classNames";
import { TaskStatuses } from "./interface.d";
import { DropdownItemsProps, DropwdownProps } from "../base/dropdown/interface";

interface TaskStatusProps {
  status: TaskStatuses;
  onSelect:
    | Dispatch<SetStateAction<TaskStatuses>>
    | ((status: TaskStatuses) => void);
  className?: DropwdownProps["className"];

  showStatusColor?: boolean;
}
const TaskStatus = (props: TaskStatusProps) => {
  const { status, onSelect, className = {}, showStatusColor } = props;

  const selectedStatus = useMemo(() => {
    if (!status) return "";

    const {
      Icon,
      label,
      iconColor = "",
    } = TASK_STATUSES.find((task) => task.label === status) || TASK_STATUSES[0];

    return (
      <span
        className={classNames(
          "flex items-center gap-1",
          showStatusColor ? iconColor : ""
        )}
      >
        {Icon ? <Icon className={classNames("size-4", iconColor)} /> : null}
        <span className="flex-1 line-clamp-1 text-wrap truncate">{label}</span>
      </span>
    );
  }, [status, showStatusColor]);

  const handleOnSelect = (status: DropdownItemsProps) => {
    onSelect(status?.label as TaskStatuses);
  };

  return (
    <Dropdown
      label={selectedStatus}
      items={TASK_STATUSES}
      showIcon={false}
      className={className}
      onSelect={handleOnSelect}
    />
  );
};

export default TaskStatus;
