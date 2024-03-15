import { useEffect, useState } from "react"
import { Message } from "./message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    userName: '',
    userEmail: ''
  })

  const { userName, userEmail} = formState;

  const onInputChange = ({target}) => {

    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value //* This is a computed or dinamic property in Java script more information https://desarrolloweb.com/articulos/computed-property-javascript
    })
  }

  useEffect( () => {
     //console.log('useEffect called!!');
  }, []);

  useEffect( () => {
     //console.log('userName imput changed!!');
  }, [userName]);

  useEffect( () => {
     //console.log('email input changed!!');
  }, [userEmail]);

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <div className="container">
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
          className="form-control" 
          id="form-input2" 
          name="userEmail" 
          placeholder="e.g@insert.com"
          value = {userEmail} 
          onChange={ onInputChange } />
        </div>

        { 
          (userName === 'Diferoca') && <Message />
        }

    </>
  )
}
