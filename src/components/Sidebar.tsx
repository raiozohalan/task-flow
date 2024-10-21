import { NavLink } from "react-router-dom";
import classNames from "../utils/classNames";

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
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-2",
        "w-[248px] px-4 py-8",
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
      <div className="flex flex-col gap-1 pt-4">
        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            to={link?.path}
            key={link?.path}
            className={({ isActive }) =>
              classNames(
                "w-full px-4 py-2 rounded-md text-white",
                isActive ? "bg-blue-600" : "bg-transparent",
                "hover:bg-blue-500 hover:text-white"
              )
            }
          >
            {link?.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
