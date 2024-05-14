import { RouterProvider } from "react-router-dom";
import { router } from "./router/Approuter";
import './index.css'

export const CalendarApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
