import { useState } from "react";


export const useForm = (initialForm = {}) => {
  
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({target}) => {

    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value //* This is a computed or dinamic property in Java script more information https://desarrolloweb.com/articulos/computed-property-javascript
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }


  return {
    formState,
    onInputChange,
    onResetForm
  }
}
