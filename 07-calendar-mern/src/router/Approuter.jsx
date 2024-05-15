import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { ErrorPage } from "../shared";
import { CalendarPage } from "../calendar";
import { LoginPage, RegisterPage } from "../auth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route path="calendar" index element={<CalendarPage />} />
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Route>
  )
);
