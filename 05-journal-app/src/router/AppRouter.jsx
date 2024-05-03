import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { LoginPage, RegisterPage } from "../auth/pages";
import { ErrorPage } from "../shared/components";
import { JournalHome } from "../journal/pages/JournalHome";
import { AllowRoutes, ProtectedRoutes } from "./ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route
        path="home"
        element={
          <ProtectedRoutes>
            <JournalHome />
          </ProtectedRoutes>
        }
      />
      <Route path="auth">
        <Route
          path="login"
          element={
            <AllowRoutes>
              <LoginPage />
            </AllowRoutes>
          }
        />
        <Route
          path="register"
          element={
            <AllowRoutes>
              <RegisterPage />
            </AllowRoutes>
          }
        />
      </Route>
    </Route>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
