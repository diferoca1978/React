import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom";




export const ProtectedRoutes = ({ children }) => {

  const {logged} = useContext( AuthContext);

 if (!logged) {
  return <Navigate to='/login' />
 }

 return children;
}
