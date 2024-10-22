import { Dispatch, SetStateAction, useMemo } from "react";
import Dropdown from "../base/dropdown";
import { TASK_STATUSES } from "./statuts.const";
import classNames from "../../utils/classNames";
import { TaskStatuses } from "./interface.d";
import { DropdownItemsProps } from "../base/dropdown/interface";

interface TaskStatusProps {
  status: TaskStatuses;
  onSelect: Dispatch<SetStateAction<TaskStatuses>>;
}
const TaskStatus = (props: TaskStatusProps) => {
  const { status, onSelect } = props;

  const selectedStatus = useMemo(() => {
    if (!status) return "";

    const {
      Icon,
      label,
      iconColor = "",
    } = TASK_STATUSES.find((task) => task.label === status) || TASK_STATUSES[0];

    return (
      <span className="flex items-center gap-2">
        {Icon ? <Icon className={classNames("size-4", iconColor)} /> : null}
        {label}
      </span>
    );
  }, [status]);

  const handleOnSelect = (status: DropdownItemsProps) => {
    onSelect(status?.label as TaskStatuses);
  };

  return (
    <Dropdown
      label={selectedStatus}
      items={TASK_STATUSES}
      showIcon={false}
      className={{
        button: classNames(
          "mt-2 block w-full appearance-none rounded-lg border-none bg-gray-200 py-1.5 px-3 text-sm/6 text-gray-900",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-400"
        ),
      }}
      onSelect={handleOnSelect}
    />
  );
};

export default TaskStatus;
