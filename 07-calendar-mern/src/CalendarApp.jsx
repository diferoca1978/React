import { RouterProvider } from "react-router-dom";
import { router } from "./router/Approuter";
import './index.css'
import { MainTheme } from "./theme/MainTheme";

export const CalendarApp = () => {
  return (
    <>
      <MainTheme>
        <RouterProvider router={router} />
      </MainTheme>
    </>
  );
};
