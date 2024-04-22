import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={< MainLayout/>} >
      <Route path="/user" element={<AuthLayout />}>
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
