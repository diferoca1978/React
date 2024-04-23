import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { MainLayout, UserLayout } from "../layout"
import { LoginPage, RegisterPage } from "../auth/pages"
import { ErrorPage } from "../shared/components/ErrorPage"
import { JournalHome } from "../journal/pages/JournalHome"

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={< MainLayout/>} errorElement= {< ErrorPage />} >
      <Route path="home" element={< JournalHome /> } />
      <Route path="auth" element={<UserLayout />}>
        <Route path="login" element={ <LoginPage />} />
        <Route path="register" element={ <RegisterPage />} />
      </Route> 
    </Route>
  )
)


export const AppRouter = () => {
  return (
    
    <RouterProvider router={router} />

  )
}
