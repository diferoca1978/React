import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "../shared";
import { CalendarPage } from "../calendar";
import { LoginPage, ProfilePage, RegisterPage } from "../auth";
import { AuthLayout, MainLayout } from "../layout";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="calendar" index element={<CalendarPage />} />
      </Route>

      <Route path="auth" element={<AuthLayout />} errorElement={<ErrorPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

    </>
  )
);
