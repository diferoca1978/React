import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";




export const ProtectedRoutes = () => {

  const {logged} = useContext( AuthContext);

 if (!logged) {
  return <Navigate to='/login' />
 }

 return <Outlet/> ;
}
