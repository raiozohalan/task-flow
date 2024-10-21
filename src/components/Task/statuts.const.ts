
import { CheckCircle, Circle, XCircle, RefreshCw, List } from "react-feather";
import { DropdownItemsProps } from "../base/dropdown/interface";

export interface TaskStatusesProps extends DropdownItemsProps {
    backgroundColor: string;
}
export const TASK_STATUSES: TaskStatusesProps[] = [
    { label: "To Do", Icon: Circle, iconColor: "text-gray-600", backgroundColor: "bg-gray-500" },
    { label: "In Progress", Icon: CheckCircle, iconColor: "text-orange-600", backgroundColor: "bg-orange-500" },
    { label: "Done", Icon: XCircle, iconColor: "text-green-600", backgroundColor: "bg-green-500" },
    { label: "In Review", Icon: RefreshCw, iconColor: "text-blue-600", backgroundColor: "bg-blue-500" },
    { label: "Backlog", Icon: List, iconColor: "text-gray-600", backgroundColor: "bg-gray-400" },
  ];