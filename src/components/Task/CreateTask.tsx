import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "../../utils/classNames";
import TaskStatus from "./TaskStatus";
import { Task, TaskStatuses } from "./interface.d";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { slices } from "../../redux";
import { v4 } from "uuid";
import moment from "moment";

const CreateTask = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const selectedTask = useAppSelector(
    slices.tasks.selectors.selectSelectedTask
  );

  const [task, setTask] = useState<Partial<Task>>({});

  useEffect(() => {
    setTask(selectedTask ?? {});
  }, [selectedTask]);

  const showCreateTask = useMemo(() => {
    return pathname.includes("create-task");
  }, [pathname]);

  const showUpdateTask = useMemo(() => {
    return pathname.includes("update-task");
  }, [pathname]);

  const handleCloseModal = useCallback(() => {
    const redirectTo = pathname
      .replace("/create-task", "")
      .replace("/update-task", "");
    setTask({});
    dispatch(slices.tasks.actions.setSelectedTask(null));
    navigate(redirectTo);
  }, [pathname]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(() => {
    if (task?.id) {
      dispatch(slices.tasks.actions.updateTask(task as Task));
    } else {
      dispatch(slices.tasks.actions.addNewTask({ id: v4(), ...task } as Task));
    }
    handleCloseModal();
  }, [task, dispatch]);

  return (
    <Dialog
      open={showCreateTask || showUpdateTask}
      onClose={handleCloseModal}
      className="relative z-50 text-black"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          className={classNames(
            "w-2/5 space-y-4 border bg-white rounded-md",
            "border-gray-700 shadow-lg"
          )}
        >
          <Fieldset className="space-y-6 rounded-xl p-6 sm:p-10">
            <Legend className="text-base/7 font-semibold text-gray-900">
              Create Task
            </Legend>
            <Field>
              <Label className="text-sm/6 font-medium text-gray-900">
                Title
              </Label>
              <Input
                name="title"
                value={task?.title}
                className={classNames(
                  "mt-2 block w-full rounded-lg border-none bg-gray-200 py-1.5 px-3 text-sm/6 text-gray-900",
                  "ring-1 ring-gray-300 data-[hover]:ring-gray-500 ",
                  "data-[hover]:bg-gray-300/80 data-[focus]:ring-gray-500 data-[focus]:outline-none"
                )}
                onChange={handleOnChange}
              />
            </Field>

            <Field>
              <Label className="text-sm/6 font-medium text-gray-900">
                Details
              </Label>
              <Textarea
                value={task?.description}
                name="description"
                className={classNames(
                  "mt-2 block w-full resize-none rounded-lg border-none bg-gray-200 py-1.5 px-3 text-sm/6 text-gray-900",
                  "ring-1 ring-gray-300 data-[hover]:ring-gray-500 ",
                  "data-[hover]:bg-gray-300/80 data-[focus]:ring-gray-500 data-[focus]:outline-none"
                )}
                rows={3}
                onChange={handleOnChange}
              />
            </Field>
            <div className="w-full flex items-center justify-stretch gap-8">
              <Field className="flex-1">
                <Label className="text-sm/6 font-medium text-gray-900">
                  Status
                </Label>
                <div className="relative">
                  <TaskStatus
                    status={task?.status}
                    onSelect={(status: TaskStatuses) =>
                      setTask((prev) => ({ ...prev, status }))
                    }
                    className={{
                      button: classNames(
                        "mt-2 block w-full appearance-none rounded-lg border-none bg-gray-200 py-1.5 px-3 text-sm/6 text-gray-900",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-400",
                        "ring-1 ring-gray-300"
                      ),
                    }}
                  />
                </div>
              </Field>
              <Field className="flex-1">
                <Label className="text-sm/6 font-medium text-gray-900">
                  Due Date
                </Label>
                <Input
                  value={
                    task?.due_date
                      ? moment(task.due_date).format("YYYY-MM-DD")
                      : ""
                  }
                  name="due_date"
                  type="date"
                  className={classNames(
                    "mt-2 block w-full rounded-lg border-none bg-gray-200 py-1 px-3 text-sm/6 text-gray-900",
                    "ring-1 ring-gray-300 data-[hover]:ring-gray-500 ",
                    "data-[hover]:bg-gray-300/80"
                  )}
                  onChange={handleOnChange}
                />
              </Field>
            </div>
            <div className="flex justify-end space-x-4 pt-2">
              <button
                className="bg-transparent text-gray-900 text-sm font-semibold"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white text-sm font-semibold bg-blue-600 hover:bg-blue-500"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </Fieldset>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CreateTask;
