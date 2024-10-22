import { NavLink, useLocation } from "react-router-dom";
import classNames from "../utils/classNames";
import { Edit } from "react-feather";
import { useMemo } from "react";
import CreateTask from "./Task/CreateTask";

const SIDEBAR_LINKS: {
  name: string;
  path: string;
}[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tasks",
    path: "/Tasks",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  const generateCreateTaskPath = useMemo(() => {
    if (pathname.includes("create-task")) {
      return pathname;
    } else if (pathname === "/") {
      return "/create-task";
    }

    return `${pathname}/create-task`;
  }, [pathname]);

  return (
    <div
      className={classNames(
        "flex-none flex flex-col gap-y-2",
        "w-[248px] px-4 py-8 bg-[#242424]",
        "divide-y-[1px] divide-gray-600"
      )}
    >
      <div className="w-full flex gap-1 items-center justify-start">
        <img
          src="/assets/task-flow.png"
          alt="Task Flow"
          className="w-12 h-12"
        />
        <h2 className="font-bold">Task Flow</h2>
      </div>
      <div className="flex-1 flex flex-col gap-1 pt-4">
        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            to={link?.path}
            key={link?.path}
            className={({ isActive }) => {
              let isActivePath =
                pathname.replace("create-task", "") === link.path;

              return classNames(
                "w-full px-4 py-2 rounded-md text-white",
                isActivePath || isActive ? "bg-blue-700/30" : "bg-transparent",
                "hover:bg-blue-700/50 hover:text-white"
              );
            }}
          >
            {link?.name}
          </NavLink>
        ))}
      </div>

      <NavLink
        to={generateCreateTaskPath}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-500 hover:text-white"
      >
        <Edit className="w-4 h-4" /> Create Task
      </NavLink>
      <CreateTask />
    </div>
  );
};

export default Sidebar;
