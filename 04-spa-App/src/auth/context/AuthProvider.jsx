import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const init = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!true,
    user
  }
}

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer( authReducer, {}, init);

  const login = (name = '') => {

    const user = {id: 'ABC', name}
    
    const action = {
      type: types.login,
      payload: user     
    }

    localStorage.setItem('user',JSON.stringify(user))

    dispatch(action)
  } 

  const logOut = () => {
     localStorage.removeItem('user');
     const action = {type: types.logout}
     dispatch(action)
  }

  return (
    <AuthContext.Provider value= {{
      ...state,

      //methods
      login:login,
      logout: logOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}
