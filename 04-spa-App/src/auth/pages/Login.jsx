import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const Login = () => {

  const { login } = useContext( AuthContext )
  
  const navigate = useNavigate();  
  
  const onLogin = () => {

    login('Diego Rodriguez castro')
    
    navigate ('/', {
      replace: true
    })
  }


  return (
    <>
      <div className="container w-32 bg-slate-400 shadow-md border border-sky-700 text-center rounded-lg p-2">
          <button 
          className="bg-sky-600 border-2 p-2 w-16 rounded-md hover:text-white"
          onClick={onLogin}
          >
            Login            
          </button>
      </div>
    </>
  )
}
