import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages"
import { ErrorPage } from "../shared/components"
import { JournalHome } from "../journal/pages/JournalHome"

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" errorElement= {< ErrorPage />} >
      <Route path="home" element={< JournalHome /> } />
      <Route path="auth" >
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
