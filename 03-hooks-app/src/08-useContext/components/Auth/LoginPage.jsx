import { useContext } from "react"
import { UserContext } from "../../context/UserContext";


export const LoginPage = () => {

   const {user, setUser} = useContext( UserContext );
   

  return (
    <>

      <h1>LoginPage</h1>
      

      <pre> {JSON.stringify(user, null, 2)} </pre>


      <button 
      className="btn btn-primary"
      onClick={() => setUser({id:2, name: 'Leydi Parra', email: 'Leydi.parra@ejemplo.com'})}
      >
        set user
      </button>
      
    </>
  )
}
