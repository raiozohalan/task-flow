import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { DropwdownProps } from "./interface";
import { ChevronDown } from "react-feather";
import classNames from "../../../utils/classNames";

export default function Dropdown(props: DropwdownProps) {
  const {
    items,
    label,
    placeholder = "Select",
    showIcon = true,
    className = {
      button: "",
      items: "",
    },
    onSelect = () => {},
  } = props;

  return (
    <Menu>
      <MenuButton
        className={classNames(
          "inline-flex items-center gap-2 rounded-md",
          "py-1.5 px-3 text-sm/6 font-semibold ring-1 ring-gray-300",
          "data-[hover]:ring-gray-500 data-[hover]:bg-gray-300/80 data-[open]:bg-gray-300/80",
          label ? "text-black" : "text-gray-400",
          className?.button ?? ""
        )}
      >
        {label || placeholder}
        {showIcon ? <ChevronDown className="size-4 fill-white/60" /> : null}
      </MenuButton>

      <MenuItems
        transition
        anchor={{
          to: "bottom start",
          gap: 8,
        }}
        className={classNames(
          "w-52 rounded-md",
          "bg-gray-50 text-sm/6 text-black shadow-2xl ring-2 ring-gray-400",
          "transition duration-100 ease-out [--anchor-gap:var(--spacing-1)]",
          className?.items ?? ""
        )}
      >
        {items.map(({ Icon, label, iconColor }, index) => (
          <MenuItem key={index}>
            <button
              className={classNames(
                "group flex w-full items-center gap-2",
                "rounded-none py-1.5 px-3",
                "first:rounded-t-md last:rounded-b-md bg-inherit",
                "data-[focus]:border-gray-400 data-[focus]:bg-gray-100"
              )}
              onClick={() => onSelect({ Icon, label, iconColor })}
            >
              {Icon ? (
                <Icon
                  className={classNames(
                    "size-4",
                    iconColor ?? ""
                  )}
                />
              ) : null}
              {label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
