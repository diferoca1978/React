
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {


  const {formState, onInputChange, onResetForm} = useForm({
    userName: '',
    userEmail: '',
    userPassword: ''
  })
  
  const {userName, userEmail, userPassword} = formState

  return (
    <>
        <h1>Form with custom hook</h1>
        <hr />
        <form>
          <label htmlFor="form-input1" className="form-label mb-0" >Name</label>
          <input 
          type="text" 
          className="form-control mb-3" 
          id="form-input1" 
          name="userName" 
          placeholder="Insert name"
          value = { userName }
          onChange={ onInputChange } />
        
          <label htmlFor="form-input2" className="form-label mb-0">Email</label>
          <input 
          type="email" 
          className="form-control mb-3" 
          id="form-input2" 
          name="userEmail" 
          placeholder="e.g@insert.com"
          value = {userEmail} 
          onChange={ onInputChange } />
          
          
          <label htmlFor="form-input3" className="form-label mb-0">Password</label>
          <input 
          type="password" 
          className="form-control mb-3" 
          id="form-input3" 
          name="userPassword" 
          placeholder="Password"
          value = {userPassword} 
          onChange={ onInputChange } />
          
        </form>

        <button onClick={onResetForm} className="btn btn-primary"> Reset </button>

    </>
  )
}
