import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
