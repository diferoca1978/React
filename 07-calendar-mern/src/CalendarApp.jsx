import { RouterProvider } from "react-router-dom";
import { router } from "./router/Approuter";

export const CalendarApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
