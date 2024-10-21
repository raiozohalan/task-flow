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
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "../../utils/classNames";
import Dropdown from "../base/dropdown";
import { DropdownItemsProps } from "../base/dropdown/interface";
import { TASK_STATUSES } from "./statuts.const";

const CreateTask = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<DropdownItemsProps | null>(null);

  const showCreateTask = useMemo(() => {
    return pathname.includes("create-task");
  }, [pathname]);

  const handleCloseModal = () => {
    navigate(pathname.replace("/create-task", ""));
  };

  const selectedStatus = useMemo(() => {
    if (!status) return "";

    const { Icon, label, iconColor = "" } = status;

    return (
      <span className="flex items-center gap-2">
        {Icon ? <Icon className={classNames("size-4", iconColor)} /> : null}
        {label}
      </span>
    );
  }, [status]);

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <Dialog
      open={showCreateTask}
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
                className={classNames(
                  "mt-2 block w-full rounded-lg border-none bg-gray-200 py-1.5 px-3 text-sm/6 text-gray-900",
                  "ring-1 ring-gray-300 data-[hover]:ring-gray-500 ",
                  "data-[hover]:bg-gray-300/80 data-[focus]:ring-gray-500 data-[focus]:outline-none"
                )}
              />
            </Field>

            <Field>
              <Label className="text-sm/6 font-medium text-gray-900">
                Details
              </Label>
              <Textarea
                className={classNames(
                  "mt-2 block w-full resize-none rounded-lg border-none bg-gray-200 py-1.5 px-3 text-sm/6 text-gray-900",
                  "ring-1 ring-gray-300 data-[hover]:ring-gray-500 ",
                  "data-[hover]:bg-gray-300/80 data-[focus]:ring-gray-500 data-[focus]:outline-none"
                )}
                rows={3}
              />
            </Field>
            <div className="w-full flex items-center justify-stretch gap-8">
              <Field className="flex-1">
                <Label className="text-sm/6 font-medium text-gray-900">
                  Status
                </Label>
                <div className="relative">
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
                    onSelect={(params: DropdownItemsProps) => setStatus(params)}
                  />
                </div>
              </Field>
              <Field className="flex-1">
                <Label className="text-sm/6 font-medium text-gray-900">
                  Due Date
                </Label>
                <Input
                  name="due_date"
                  type="date"
                  className={classNames(
                    "mt-2 block w-full rounded-lg border-none bg-gray-200 py-1 px-3 text-sm/6 text-gray-900",
                    "ring-1 ring-gray-300 data-[hover]:ring-gray-500 ",
                    "data-[hover]:bg-gray-300/80"
                  )}
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
