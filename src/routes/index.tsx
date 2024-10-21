import { createBrowserRouter } from "react-router-dom";
import HomePage from "./sub-routes/Home";
import RootLayout from "./RootLayout";
import Task from "./sub-routes/Task";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
        path: "/home/*"
      },
      {
        path: "/tasks/*",
        element: <Task />
      },
    ]
  },
]);
